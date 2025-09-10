import { createContext, type SetStateAction } from "react";
import type { Theme } from "../App";

interface ThemeContext {
  theme: Theme
  setTheme: React.Dispatch<SetStateAction<Theme>>
  mainRef: React.RefObject<HTMLElement | null>
}

export const ThemeContext = createContext<ThemeContext | null>(null);