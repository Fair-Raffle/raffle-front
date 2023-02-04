export interface NftRaffle {
  status: RaffleStatus;
  random_number: BigInt;
  raffleMaker: RaffleMaker;
  winner_count: number;
  initTime: number;
  finalTime: number;
  nftContractAddress: string;
  attendeesLen: number;
}

export interface OtherRaffle {
  status: RaffleStatus;
  random_number: BigInt;
  raffleMaker: RaffleMaker;
  winner_count: number;
  initTime: number;
  finalTime: number;
  ipfsHash: string;
  attendeesLen: number;
}

export interface Raffle {
  raffleId: number;
  raffleType: RaffleType;
  raffleInfo: NftRaffle | OtherRaffle
}

export interface RaffleMaker {
  address: string;
}

export enum RaffleStatus {
  WAITING_L1_MESSAGE = "WAITING_L1_MESSAGE",
  WAITING_L1_INTERACTION = "WAITING_L1_INTERACTION",
  WAITING_L2_MESSAGE = "WAITING_L2_MESSAGE",
  FINALIZED = "FINALIZED",
}

export enum RaffleType {
  NFT_PROJECT = "NFT_PROJECT",
  CUSTOM_LIST = "CUSTOM_LIST",
  TWITTER = "TWITTER",
}
