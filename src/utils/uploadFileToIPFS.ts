import axios from "axios";
import Attendee from "../types/Attendee";

const pinataApiKey = "34160ccc0ed75bd07524";
const pinataSecretApiKey =
  "cde76e83717fd17dd7f0d6d4054b3cc2b0a14cb5d7c517aa81d446c5e610c75f";

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
