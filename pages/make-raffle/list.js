import Layout from "@/components/layout";
import styles from "@/styles/List.module.css";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

const List = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  console.log(file);

  return (
    <Layout>
      <div className="left_gradient" />
      <div className="right_gradient" />
      <main className={styles.main}>
        <div className={styles.body}>
          <h1 className={styles.title}>RAFFLE TOOL FOR SELECTED COLLECTIONS</h1>
          <div className={styles.subtitles}>
            <p className={styles.subtitle}>
              Anyone can make fair raffles for early starkers via that page. Our
              raffle is totally on-chain, transparent & accountable. Just as
              suppose to be!
            </p>
            <p className={styles.subtitle}>
              Just enter the star numbers, then raffle tool will give you winner
              numbers and holders.
            </p>
            <p className={styles.subtitle}>
              Note: This page is optimized for Early Starkers NFTs, if you want
              to make raffle for
            </p>
          </div>
        </div>
        <div className={styles.steps_header}>
          <h1> Make a Fair Raffle In Few Steps </h1>
        </div>
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.step_body}>
              <h2 className={styles.step_title}> Participant Amount? </h2>
              <div className={styles.step_body_text}>
                <label className={styles.label}>
                  Enter the total participant number.
                </label>
                <label className={styles.label}>
                  Max 2500 participants allowed.
                </label>
              </div>
            </div>
            <div className={styles.step_body_input}>
              <input
                type="number"
                className={styles.input}
                placeholder="_ _ _ _ _ _ _ _"
              />
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.step_body}>
              <h2 className={styles.step_title}> Winner Amount? </h2>
              <div className={styles.step_body_text}>
                <label className={styles.label}>
                  All the winners will be sorted 1 to n.
                </label>
              </div>
            </div>
            <div className={styles.step_body_input}>
              <input
                type="number"
                className={styles.input}
                placeholder="_ _ _ _ _ _ _ _"
              />
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.step_body}>
              <h2 className={styles.step_title}> (Opt) Name Your Raffle </h2>
              <div className={styles.step_body_text}>
                <label className={styles.label}>
                  With that, users can search your raffle via name. max 12
                  character.
                </label>
              </div>
            </div>
            <div className={styles.step_body_input}>
              <input
                type="number"
                className={styles.input}
                placeholder="_ _ _ _ _ _ _ _"
              />
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.step_body}>
              <h2 className={styles.step_title}>Upload Your XLS / CSV File</h2>
              <div className={styles.step_body_text}>
                <label className={styles.label}>
                  In the first column: Enter all the participants names. (For
                  each cell.)
                </label>
                <label className={styles.label}>
                  In the second column : Enter all the public keys (For each
                  cell)
                </label>
              </div>
            </div>
            <div className={styles.step_body_input}>
              <input type="file" onChange={handleFileChange} />

              <Link
                href="/make-raffle/process"
                className={styles.upload_button}
              >
                Upload & Start Raffle
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

// export default List;
