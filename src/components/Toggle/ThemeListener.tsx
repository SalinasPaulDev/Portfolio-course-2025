import { AppDispatcher } from "@/store/hooks";
import { useEffect } from "react";

export function ThemeListener() {
  const { useAppSelector } = AppDispatcher();
  const theme = useAppSelector((state) => state.theme.theme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return null;
}
