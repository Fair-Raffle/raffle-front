import React, { useState } from "react";
import * as xlsx from "xlsx";
import Attendee from "./types/Attendee";
import uploadFile from "./utils/uploadFileToIPFS";
import getFileAtIPFS from "./utils/getFileAtIPFS";

function App() {
  const [raffleAttendees, setRaffleAttendees] = useState<Attendee[]>([]);

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
        const attendees = []
        for (let row of json) {
          attendees.push(row as Attendee)
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
    console.log("hash: " + hash)
  }

  const viewRaffleAttendees = async () => {
    const mockHash = "bafkreidwmgwerwo643audraprktfu6ffjm6f5ipblurotkhlg5o63yhzgu";
    await getFileAtIPFS(mockHash);
  }

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
    </div>
  );
}

export default App;
