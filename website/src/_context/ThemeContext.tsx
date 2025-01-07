"use client";

import {
  ContextProviderProps,
  ThemeContextProps,
} from "@/_types/Context.types";
import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext<ThemeContextProps>({
  websiteDarkTheme: false,
  setWebsiteDarkTheme: () => {},
});

const ThemeProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [websiteDarkTheme, setWebsiteDarkTheme] = useState<boolean>(false);

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

    if (prefersDark.matches) {
      setWebsiteDarkTheme(true);
    }
    prefersDark.addEventListener("change", (event) =>
      setWebsiteDarkTheme(event.matches)
    );
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        websiteDarkTheme,
        setWebsiteDarkTheme,
      }}
    >
      <div
        className={`teaui teaui-schema ${
          websiteDarkTheme ? "theme-dark" : "theme-light"
        }`}
      >
        <div className="teaui body">{children}</div>
      </div>
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
