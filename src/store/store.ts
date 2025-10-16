import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlices";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
