import React, { useEffect, useState, useRef } from "react";
import * as xlsx from "xlsx";
import Attendee from "./types/Attendee";
import uploadFile from "./utils/uploadFileToIPFS";
import getFileAtIPFS from "./utils/getFileAtIPFS";
import { useAppDispatch } from "./store";
import { web3Actions } from "./store/reducers/web3";
import { Contract, Provider } from "starknet";
import { useAppSelector } from "./store";
import { connect, disconnect } from "get-starknet";
import abi from "./abi/fair_raffle_abi.json"
import { CTC_ADDR } from "./constants/address";

function App() {
  const dispatch = useAppDispatch();
  const didInit = useRef<boolean>(false);
  const web3State = useAppSelector((state) => state.web3);

  const [raffleAttendees, setRaffleAttendees] = useState<Attendee[]>([]);

  useEffect(() => {
    if (!didInit.current) {
      const provider = new Provider();
      dispatch(web3Actions.setProvider(provider));
      const contract = new Contract(abi, CTC_ADDR, provider);
      dispatch(web3Actions.setContract(contract));
      didInit.current = true;
    }
  }, [dispatch]);

  const logState = () => {
    console.log(web3State);
  };

  const connectWallet = async () => {
    const wallet = await connect({modalMode: "alwaysAsk"});
    if (wallet) {
      await wallet.enable({})
      dispatch(web3Actions.setStarknet(wallet))
      if (wallet.isConnected) {
        const contract = new Contract(abi, CTC_ADDR, wallet.account)
        dispatch(web3Actions.setContract(contract))
      }
    }
  };

  const disconnectWallet = async () => {
    await disconnect({clearLastWallet: true})
    dispatch(web3Actions.setConnected(false))
  };

  const readUploadFile = (e: any) => {
    e.preventDefault();
    if (e.target.files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target?.result;
        const workbook = xlsx.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json: Attendee[] = xlsx.utils.sheet_to_json(worksheet);
        console.log(json);
        const attendees = [];
        for (let row of json) {
          attendees.push(row as Attendee);
        }
        setRaffleAttendees(attendees);
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };

  const startRaffle = async () => {
    console.log(raffleAttendees);
    const res = await uploadFile("hikmo", raffleAttendees);
    const hash = res.data.IpfsHash;
    console.log("hash: " + hash);
  };

  const viewRaffleAttendees = async () => {
    const mockHash =
      "bafkreidwmgwerwo643audraprktfu6ffjm6f5ipblurotkhlg5o63yhzgu";
    await getFileAtIPFS(mockHash);
  };

  return (
    <div>
      <form>
        <label htmlFor="upload">Upload File</label>
        <input
          type="file"
          name="upload"
          id="upload"
          onChange={readUploadFile}
        />
      </form>
      <button onClick={startRaffle}>Start Raffle</button>
      <button onClick={viewRaffleAttendees}>View json</button>
      <button onClick={logState}>Log web3 state</button>
      <button onClick={connectWallet}>Connect Wallet</button>
      <button onClick={disconnectWallet}>Disconnect</button>
      <h3>{web3State.account?.address && web3State.connected ? `Wallet address: ${web3State.account.address}` : null}</h3>
    </div>
  );
}

export default App;
