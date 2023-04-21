import { useRouter } from "next/router";
import styles from "@/styles/PastRaffle.module.css";
import Image from "next/image";
import Layout from "@/components/layout";
import { getContract } from "../api/hello";
import { useEffect, useState } from "react";
import Header from "@/components/header";
import Box from "@/components/box";
import Head from "next/head";

const Section1 = (props) => {
  const { raffle, loading } = props;
  return (
    <div className={styles.section_1}>
      <div className={styles.section_1_entry}>
        <label className={styles.section_1_label}>Total Entries</label>
        <h3 className={styles.section_1_value_banner}>
          {loading ? "Loading" : raffle.numberOfTickets}
        </h3>
      </div>
      <div className={styles.section_1_entry}>
        <label className={styles.section_1_label}>Winners</label>
        <h3 className={styles.section_1_value_banner}>
          {loading ? "Loading" : raffle.numberOfWinners}
        </h3>
      </div>
      <div className={styles.section_1_entry}>
        <label className={styles.section_1_label}>Raffle Maker:</label>
        <h3 className={styles.section_1_value}>
          {raffle.owner?.substring(0, 7)}...{raffle.owner?.slice(-6)}
        </h3>
      </div>
      <div className={styles.section_1_entry}>
        <label className={styles.section_1_label}>Uploaded Raffle List:</label>
        <a
          className={styles.section_1_value}
          style={{ textDecoration: "underline" }}
          href={
            "https://luckycookies.infura-ipfs.io/ipfs/" +
            raffle.raffleListIpfsHash
          }
          target="_blank"
        >
          {raffle.raffleListIpfsHash?.substring(0, 7)}...
          {raffle.raffleListIpfsHash?.slice(-6)}
        </a>
      </div>
    </div>
  );
};

const Section2 = (props) => {
  const { raffle, loading } = props;
  return (
    <div className={styles.section_2}>
      <div className={styles.section_2_entry}>
        <label className={styles.section_1_label}>Raffle ID:</label>
        <h1 className={styles.section_1_value}>
          {loading ? "Loading" : raffle.id}
        </h1>
      </div>
      <div className={styles.section_2_entry}>
        <label className={styles.section_1_label}>Raffle Name:</label>
        <h1 className={styles.section_1_value}>{raffle.name}</h1>
      </div>
      {/* <div className={styles.section_2_entry}>
        <label className={styles.section_1_label}>IPFS Link</label>
        <a className={styles.section_1_value}>{raffle.raffleResultIpfsHash}</a>
      </div> */}
    </div>
  );
};

const Section3 = (props) => {
  const { raffle, loading } = props;
  return (
    <div className={styles.section_3}>
      <RaffleResultTable winners={raffle.winners} loading={loading} />
      {/* <Social /> */}
    </div>
  );
};

const Social = () => {
  return (
    <div className={styles.social}>
      <div className={styles.social_item}>
        <Image src="/svg/download.svg" alt="download" width={15} height={15} />
        <a className={styles.social_link}> Download </a>
      </div>

      <div className={styles.social_item}>
        <Image src="/svg/twitter.svg" alt="twitter" width={20} height={20} />

        <a className={styles.social_link}> Tweet It ! </a>
      </div>
    </div>
  );
};

const RaffleResultTable = (props) => {
  const { winners, loading } = props;

  return (
    <div className={styles.table_container}>
      <h1 className={styles.table_title}>RAFFLE RESULTS</h1>
      <div className={styles.table_wrapper}>
        <table className={styles.winner_table}>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Holder</th>
            </tr>
          </thead>
          <tbody>
            {loading &&
              Array(10)
                .fill(0)
                .map((_, index) => {
                  return (
                    <tr key={index}>
                      <td>Loading...</td>
                      <td>Loading...</td>
                      <td>Loading...</td>
                    </tr>
                  );
                })}
            {!loading && winners?.length === 0 && (
              <tr>
                <td>No winners</td>
              </tr>
            )}
            {!loading &&
              winners?.length > 0 &&
              winners?.map((winner, index) => {
                return (
                  <tr key={index}>
                    <td>{("0000" + winner.id).slice(-4)}</td>
                    <td>{winner.name}</td>
                    <td>
                      {winner.holder.substring(0, 5)}...
                      {winner.holder.slice(-5)}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default function PastRaffle() {
  const router = useRouter();
  const { index } = router.query;
  const [raffle, setRaffle] = useState({});
  const [contract, setContract] = useState();
  const [ipfs, setIPFS] = useState({});
  const [loading, setLoading] = useState(true);

  const getRaffle = async () => {
    const raffle = await contract.raffles(index);
    const winners = await contract.getWinnersOfRaffle(index);
    const winnersData = [];
    if (!raffle) {
      return;
    }

    if (raffle.status?.toString() === "3") {
      const url = `https://fairraffle.infura-ipfs.io/ipfs/${raffle.raffleListIpfsHash}`;
      const response = await fetch(url);
      const data = await response.json();
      setIPFS(data);

      winners.map((winner) => {
        const winnerData = data.participants.find(
          (participant) => participant.id == winner.toString()
        );
        winnersData.push(winnerData);
      });
    }

    setRaffle({
      owner: raffle.owner,
      status: raffle.status?.toString(),
      // requestStatus: raffle.requestStatus?.toString(),
      name: raffle.name,
      id: raffle.id.toString(),
      raffleListIpfsHash: raffle.raffleListIpfsHash,
      numberOfTickets: raffle.numberOfTickets?.toString(),
      numberOfWinners: raffle.numberOfWinners?.toString(),
      raffleResultIpfsHash: raffle.raffleResultIpfsHash,
      time: raffle.time?.toString(),
      winners: winnersData,
    });
    setLoading(false);
  };

  const getIPFS = async () => {
    const url = `https://fairraffle.infura-ipfs.io/ipfs/${raffle.raffleListIpfsHash}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    setLoading(true);
    if (contract) {
      getRaffle();
    } else {
      getContract().then((contract) => {
        setContract(contract);
      });
    }
  }, [contract, raffle.status]);

  return (
    <Layout>
      <Head>
        <title>Past Raffle </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="left_gradient" />
      <div className="right_gradient" />
      <main className={styles.main}>
        <Header
          title="Past Raffle"
          texts={[
            "You can check out past raffles anytime via that page. Just click to results. Never trust, verify.",
            "Raffle Date:",
            new Date(raffle.time * 1000).toLocaleString(),
          ]}
        />
        <div className={styles.wrapper}>
          <h2> {raffle.name} List Raffle - Project Owner </h2>
          <div className={styles.raffle}>
            <Section1 raffle={raffle} loading={loading} />
            <Section2 raffle={raffle} loading={loading} />
            <Section3 raffle={raffle} loading={loading} />
          </div>
        </div>
      </main>
    </Layout>
  );
}
