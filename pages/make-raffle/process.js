import Layout from "@/components/layout";
import styles from "@/styles/Process.module.css";
import Link from "next/link";

const List = () => {
  return (
    <Layout>
      <div className="left_gradient" />
      <div className="right_gradient" />
      <main className={styles.main}>
        <div className={styles.body}>
          <h1 className={styles.title}>RAFFLE TOOL FOR LIST</h1>
          <div className={styles.subtitles}>
            <p className={styles.subtitle}>
              Anyone can make fair raffles for early starkers via that page. Our
              raffle is totally on-chain, transparent & accountable. Just as
              suppose to be!
            </p>
            <p className={styles.subtitle}>
              Just enter the star numbers, then raffle tool will give you winner
              numbers and holders. Note: This page is optimized for Early
              Starkers NFTs, if you want to make raffle for
            </p>
            <p className={styles.subtitle}>
              Note: This page is optimized for Early Starkers NFTs, if you want
              to make raffle for
            </p>
          </div>
        </div>
        <div className={styles.raffle}>
          <div className={styles.raffle_section}>
            <div className={styles.raffle_section_title}>
              <h1>RAFFLE STATUS</h1>
            </div>
            <div className={styles.raffle_status_body}>
              <div className={styles.raffle_item}>
                <h1 className={styles.raffle_section_subtitle}>
                  Your Raffle List Uploading
                </h1>
                <label className={styles.raffle_section_label}>
                  Raffle just started. It is uploading to blockchain
                </label>
                <div className={styles.raffle_item_progress} />
              </div>
              <div className={styles.raffle_item}>
                <h1 className={styles.raffle_section_subtitle}>
                  Waiting For Random Number
                </h1>
                <label className={styles.raffle_section_label}>
                  We are waiting for true random number from ****.
                </label>
                <div className={styles.raffle_item_progress} />
              </div>
              <div className={styles.raffle_item}>
                <h1 className={styles.raffle_section_subtitle}>
                  Here is the Results!
                </h1>
                <div className={styles.raffle_item_progress} />
              </div>
            </div>
          </div>
          <div className={styles.raffle_section}>
            <div className={styles.raffle_section_title}>
              <h1>RAFFLE RESULTS</h1>
            </div>
            <div className={styles.raffle_result_body}>
              <div className={styles.raffle_result_information}>
                <div className={styles.raffle_result_information_item}>
                  <label className={styles.raffle_section_subtitle}>
                    Raffle ID:
                  </label>
                  <h1 className={styles.raffle_section_label_2}>0x0</h1>
                </div>
                <div className={styles.raffle_result_information_item}>
                  <label className={styles.raffle_section_subtitle}>
                    Raffle Name:
                  </label>
                  <h1 className={styles.raffle_section_label_2}>
                    Early Starkers Raffle
                  </h1>
                </div>
                <div className={styles.raffle_result_information_item}>
                  <label className={styles.raffle_section_subtitle}>
                    Raffle Maker:
                  </label>
                  <h1 className={styles.raffle_section_label_2}>
                    0xad204124fc35a2c
                  </h1>
                </div>
                <div className={styles.raffle_result_information_item}>
                  <label className={styles.raffle_section_subtitle}>
                    Selected Stars:
                  </label>
                  <h1 className={styles.raffle_section_label_2}>200</h1>
                </div>
              </div>
              <div className={styles.raffle_result_winner}>
                <h1 className={styles.raffle_result_winner_table_title}>
                  RAFFLE RESULTS
                </h1>
                <table className={styles.raffle_result_winner_table}>
                  <thead>
                    <tr>
                      <th>Rank</th>
                      <th>Name</th>
                      <th>Holder</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Early Starker</td>
                      <td>0x0</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Early Starker</td>
                      <td>0x0</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Early Starker</td>
                      <td>0x0</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Early Starker</td>
                      <td>0x0</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Early Starker</td>
                      <td>0x0</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Early Starker</td>
                      <td>0x0</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Early Starker</td>
                      <td>0x0</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Early Starker</td>
                      <td>0x0</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Early Starker</td>
                      <td>0x0</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Early Starker</td>
                      <td>0x0</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Early Starker</td>
                      <td>0x0</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Early Starker</td>
                      <td>0x0</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Early Starker</td>
                      <td>0x0</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Early Starker</td>
                      <td>0x0</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Early Starker</td>
                      <td>0x0</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Early Starker</td>
                      <td>0x0</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Early Starker</td>
                      <td>0x0</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Early Starker</td>
                      <td>0x0</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Early Starker</td>
                      <td>0x0</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Early Starker</td>
                      <td>0x0</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Early Starker</td>
                      <td>0x0</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Early Starker</td>
                      <td>0x0</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Early Starker</td>
                      <td>0x0</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Early Starker</td>
                      <td>0x0</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Early Starker</td>
                      <td>0x0</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Early Starker</td>
                      <td>0x0</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Early Starker</td>
                      <td>0x0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

// export default List;
