import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import WalletModal from "./wallet_modal";
import { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { activate, active, chainId, account } = useWeb3React();
  // const Injected = new InjectedConnector({
  //   supportedChainIds: [1, 3, 4, 5, 42, 1337],
  // });

  // const connectWallet = () => {
  //   activate(Injected);
  // };

  return (
    <nav>
      {show && <WalletModal setShow={setShow} />}
      <div className={styles.nav_wrapper}>
        <div className={styles.nav_brand}>
          <Link href="/">
            <img src="/svg/logo.svg" alt="logo" width={200} height={50} />
          </Link>
          {/* <span className={styles.nav_brand_title}>Fair Raffle</span> */}
        </div>
        <div className={styles.nav_items}>
          <Link href="/past-raffles">Past Raffles</Link>
          <a href="https://fairraffle.notion.site/fairraffle/FairRaffle-io-0c0440a2f2be427495ba60f5c3e134f6">
            About
          </a>
          <button
            onClick={() => {
              setShow(true);
            }}
            className={styles.connect}
          >
            {active ? account.substring(0, 10) + "..." : "Connect Wallet"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
