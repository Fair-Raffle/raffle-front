// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ethers } from "ethers";
import raffle_manager from "@/abi/raffle_manager.json";
import contract_addresses from "@/abi/contract_addresses.json";

let signer, contract, provider;

export const setup = async () => {
  // provider = new ethers.JsonRpcProvider("https://rpc2.sepolia.org");
  provider = new ethers.JsonRpcProvider("http://127.0.0.1:7545");
  console.log(provider);
  const chainId = (await provider.getNetwork()).chainId.toString();
  const contractAddress = contract_addresses[chainId][0];
  contract = new ethers.Contract(contractAddress, raffle_manager);
};

export const getContract = async () => {
  await setup();
  // signer = await provider.getSigner();
  contract = await contract.connect(provider);

  return contract;
};

export const raffleStatus = (status) => {
  switch (status) {
    case "0":
      return "CREATED";
    case "1":
      return "VRF_REQUESTED";
    case "2":
      return "FULFILLED";
    case "3":
      return "FINISHED";
    default:
      return "UNKNOWN";
  }
};
