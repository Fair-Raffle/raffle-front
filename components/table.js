import styles from "@/styles/components/RaffleTable.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";

const RaffleTable = (props) => {
  const { raffles } = props;
  const [width, height] = useWindowDimension();

  const isMobile = width < 768;

  function useWindowDimension() {
    const [dimension, setDimension] = useState([0, 0]);
    useEffect(() => {
      const debouncedResizeHandler = debounce(() => {
        setDimension([window.innerWidth, window.innerHeight]);
      }, 100);
      setDimension([window.innerWidth, window.innerHeight]);
      window.addEventListener("resize", debouncedResizeHandler);
      return () => window.removeEventListener("resize", debouncedResizeHandler);
    }, []); // Note this empty array. this effect should run only on mount and unmount
    return dimension;
  }

  function debounce(fn, ms) {
    let timer;
    return (_) => {
      clearTimeout(timer);
      timer = setTimeout((_) => {
        timer = null;
        fn.apply(this, arguments);
      }, ms);
    };
  }

  const mobileText = (text) => {
    if (isMobile) {
      if (text.length > 10) {
        return text.substring(0, 10) + "...";
      } else {
        return text;
      }
    }
    return text;
  };

  return (
    <table className={styles.past_raffles}>
      <thead>
        <tr>
          <th> {isMobile ? "#" : "Raffle Num"} </th>
          <th> {isMobile ? "Maker" : "Raffle Maker"} </th>
          <th> {isMobile ? "Name" : "Raffle Name"} </th>
          <th> Time </th>
          {!isMobile && <th> Selected </th>}
          <th> Results </th>
        </tr>
      </thead>
      <tbody>
        {raffles?.map((raffle, index) => {
          return (
            <tr key={index}>
              <td> {raffle.id} </td>
              <td>
                {mobileText(
                  raffle.owner.substring(0, 7) + "..." + raffle.owner.slice(-6)
                )}
              </td>
              <td> {mobileText(raffle.name)} </td>
              <td> {raffle.time} </td>
              {!isMobile && <td> {raffle.numberOfWinners} </td>}
              <td>
                {raffle.status === "0" && (
                  <Link
                    href={`/past-raffle/${raffle.id}`}
                    className={styles.result_button}
                  >
                    <span>{isMobile ? "⏰" : "⏰ Raffle is not started"}</span>
                  </Link>
                )}
                {(raffle.status == "1" || raffle.status == "2") && (
                  <Link
                    href={`/past-raffle/${raffle.id}`}
                    className={styles.result_button}
                  >
                    <span>{isMobile ? "⏳" : "⏳ Waiting for VRF"} </span>
                  </Link>
                )}
                {raffle.status == "3" && (
                  // <Link
                  //   href={`/past-raffle/${raffle.id}`}
                  //   className={styles.result_button}
                  // >
                  //   <span className="finished_parent">
                  //     <span className="finished">🎉</span>
                  //     Raffle is finished
                  //   </span>
                  // </Link>
                  <Link
                    href={`/past-raffle/${raffle.id}`}
                    className={styles.result_button}
                  >
                    <span>{isMobile ? "🎉" : "🎉 Click To See Results"} </span>
                  </Link>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default RaffleTable;
