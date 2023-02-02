import axios from "axios";
import Attendee from "../types/Attendee";

const pinataApiKey: string = process.env.REACT_APP_PINATA_API_KEY as string;
const pinataSecretApiKey: string = process.env.REACT_APP_PINATA_SECRET_API_KEY as string;

console.log(pinataApiKey)
console.log(pinataSecretApiKey)

const uploadFile = async (fileName: string, jsonObject: Attendee[]) => {
  const data = JSON.stringify({
    pinataOptions: {
      cidVersion: 1,
    },
    pinataMetadata: {
      name: fileName,
    },
    pinataContent: jsonObject,
  });

  const config = {
    method: "post",
    url: "https://api.pinata.cloud/pinning/pinJSONToIPFS",
    headers: {
      "Content-Type": "application/json",
      pinata_api_key: pinataApiKey,
      pinata_secret_api_key: pinataSecretApiKey,
    },
    data: data,
  };

  const res = await axios(config);

  console.log(res.data);
  return res;
};

export default uploadFile;
