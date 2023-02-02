import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type IStarknetWindowObject } from "@argent/get-starknet/dist";
import { Contract, Provider } from "starknet";

export type Web3StateType = {
  provider: Provider | null;
  contract: Contract | null;
  account: any;
  connected: boolean;
};

const initialState: Web3StateType = {
  provider: null,
  contract: null,
  account: null,
  connected: false,
};

export const web3Slice = createSlice({
  name: "web3",
  initialState,
  reducers: {
    setProvider: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        provider: action.payload,
      };
    },
    setStarknet: (state, action: PayloadAction<IStarknetWindowObject | undefined>) => {
      if (action.payload === undefined) return {...state}
      return {
        ...state,
        connected: action.payload.isConnected,
        account: action.payload.account,
      };
    },
    setContract: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        contract: action.payload,
      };
    },
  },
});

export const web3Reducer = web3Slice.reducer;
export const web3Actions = web3Slice.actions;
