import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type StarknetWindowObject } from "get-starknet";
import { Contract, Provider, AccountInterface } from "starknet";

export type Web3StateType = {
  provider: Provider | null | undefined;
  contract: Contract | null | undefined;
  account: AccountInterface | null | undefined;
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
    setProvider: (state, action: PayloadAction<Provider>) => {
      return {
        ...state,
        provider: action.payload,
      };
    },
    setStarknet: (
      state,
      action: PayloadAction<StarknetWindowObject | undefined>
    ) => {
      if (action.payload === undefined) return { ...state };
      return {
        ...state,
        connected: action.payload.isConnected,
        account: action.payload.account,
      };
    },
    setContract: (state, action: PayloadAction<Contract>) => {
      return {
        ...state,
        contract: action.payload,
      };
    },
    setConnected: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        connected: action.payload
      }
    },
  },
});

export const web3Reducer = web3Slice.reducer;
export const web3Actions = web3Slice.actions;
