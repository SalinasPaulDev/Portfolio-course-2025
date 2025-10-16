import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ConfigState {
  name: string;
}

const initialState: ConfigState = {
  name: "Brain Paul - React Developer",
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setConfigName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { setConfigName } = configSlice.actions;
export default configSlice.reducer;
