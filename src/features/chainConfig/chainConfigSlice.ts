import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ChainConfigs,
  ChainTypes,
  ConfigType,
} from "../../constants/ChainTypes";

let initialState: ConfigType = ChainConfigs[ChainTypes.JUNO];

export const chainConfigSlice = createSlice({
  name: "chainConfig",
  initialState,
  reducers: {
    setChainConfig: (state, action: PayloadAction<ChainTypes>) => {
      const chainType = action.payload;
      const chainConfig = ChainConfigs[chainType];
      state = chainConfig;
      return state;
    },
  },
});

export const { setChainConfig } = chainConfigSlice.actions;

export default chainConfigSlice.reducer;
