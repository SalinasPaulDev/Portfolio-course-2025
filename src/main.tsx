import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { store } from "./store/store.ts";
import { Provider } from "react-redux";
import { ThemeListener } from "./components/Toggle/ThemeListener.tsx";
import { Toaster } from "@/components/ui/sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Toaster />
        <ThemeListener />
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
