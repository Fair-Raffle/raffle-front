import styles from "@/styles/components/WalletModal.module.css";
import { useWeb3React } from "@web3-react/core";
import { useConnectors } from "@starknet-react/core";
import Image from "next/image";
const WalletModal = ({ setShow }) => {
  const { activate, active, chainId, account } = useWeb3React();

  const { connect, connectors } = useConnectors();

  console.log(connectors);
  const connectWallet = (connector) => {
    connect(connector);
  };

  return (
    <div className={styles.wallet_modal}>
      <div className={styles.wallet_modal_content}>
        <div className={styles.wallet_modal_content_header}>
          <h1 className={styles.wallet_modal_content_header_title}>
            CONNECT YOUR STARKNET WALLET
          </h1>

          <Image
            src="/svg/cancel.svg"
            width={32}
            height={32}
            onClick={() => setShow(false)}
          />
        </div>
        <div className={styles.wallet_modal_content_body}>
          <div
            className={styles.wallet_modal_content_body_description_container}
          >
            <p className={styles.wallet_modal_content_body_description}>
              FairRaffle.io is open-source & trustless raffle tool aaand It is
              on Starknet!
            </p>
            <p className={styles.wallet_modal_content_body_description}>
              Connect Your Starknet Wallet to Start Any Fair Raffle
            </p>
          </div>
          <div className={styles.wallet_modal_content_body_wallet}>
            <button
              className={styles.wallet_modal_content_body_wallet_button}
              onClick={() => connectWallet(connectors[1])}
            >
              Connect Argent Wallet
            </button>
            <button
              className={styles.wallet_modal_content_body_wallet_button}
              onClick={() => connectWallet(connectors[0])}
            >
              Connect Braavos Wallet
            </button>
          </div>
        </div>
      </div>
      {/* <button onClick={connectWallet} className={styles.connect}>
        {active ? account.substring(0, 10) + "..." : "Connect Wallet"}
      </button> */}
    </div>
  );
};

export default WalletModal;
