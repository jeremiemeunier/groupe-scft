export interface ThemeContextProps {
  websiteDarkTheme: boolean;
  setWebsiteDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ContextProviderProps {
  children: React.ReactNode;
}
