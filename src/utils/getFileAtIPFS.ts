import { BASE_URL } from "../constants/ipfs";

const getFileAtIPFS = async (hash: string) => {
  const fullUrl = BASE_URL + hash
  const file = await fetch(fullUrl);
  console.log(file)
  const json = await file.json();
  console.log(json)
}

export default getFileAtIPFS;