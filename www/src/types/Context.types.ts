import { SetStateAction } from "react";

export interface ContextProviderProps {
  children: React.ReactNode;
}

export interface ScrollContextProps {
  children: React.ReactNode;
}

export interface UserTypes {
  auth_code?: string;
  auth_gender?: string;
  mail: string;
  firstname: string;
  lastname: string;
  adress?: string;
  phone?: string;
  _id: string;
  __level_id: number;
  __app_access: number;
}

export interface SessionContextProps {
  pushErrorRef?: React.RefObject<(error: any) => void>;
  getUserRef?: React.RefObject<() => void>;
  me: UserTypes | null;
}

export interface SessionProviderProps extends ContextProviderProps {
  exception?: string[];
}

export interface ThemeContextProps {
  setShade: React.Dispatch<SetStateAction<string>>;
  shade: string;
}
