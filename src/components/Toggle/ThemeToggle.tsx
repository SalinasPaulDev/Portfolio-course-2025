import { AppDispatcher } from "@/store/hooks";
import { toggleTheme } from "@/store/themeSlices";

export function ThemeToggle() {
  const { useAppDispatch, useAppSelector } = AppDispatcher();
  const theme = useAppSelector((state) => state.theme.theme);
  const dispatch = useAppDispatch();

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-gray-700"
      aria-label="Toggle theme"
    >
      <span
        className={`inline-block w-4 h-4 transform rounded-full bg-white transition-transform ${
          theme === "dark" ? "translate-x-6" : "translate-x-1"
        }`}
      />
      <span
        className={`absolute transition-transform left-1 top-1/2 -translate-y-1/2 text-xs ${
          theme === "light" ? "translate-x-0" : "translate-x-5"
        }`}
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </span>
    </button>
  );
}
