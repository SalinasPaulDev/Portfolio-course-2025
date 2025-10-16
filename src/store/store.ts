import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlices";
import contactReducer from "./contactSlices";
import configReducer from "./configSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    contact: contactReducer,
    config: configReducer,
  },
});
