import { ContextProviderProps, ThemeContextProps } from "@/types/Context.types";
import { createContext, useState } from "react";

export const ThemeContext = createContext<ThemeContextProps>({
  shade: "",
  setShade: () => {},
});

const ThemeProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [shade, setShade] = useState<string>("");

  return (
    <ThemeContext.Provider
      value={{
        shade,
        setShade,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
