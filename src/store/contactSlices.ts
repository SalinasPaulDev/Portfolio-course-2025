import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ContactState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialState: ContactState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setSubject: (state, action: PayloadAction<string>) => {
      state.subject = action.payload;
    },
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    reset: () => initialState,
  },
});

export const { setName, setEmail, setSubject, setMessage, reset } =
  contactSlice.actions;
export default contactSlice.reducer;
