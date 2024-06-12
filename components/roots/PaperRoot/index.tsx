import type { FC, ReactNode } from "react";
import { MD3DarkTheme, PaperProvider } from "react-native-paper";

const customThemeBlackWhite = {
  colors: {
    primary: "#00000F",
    secondary: "#FFFFF0",
  },
};

const theme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    ...customThemeBlackWhite.colors,
  },
};

export const PaperRoot: FC<{ children: ReactNode }> = ({ children }) => {
  return <PaperProvider theme={theme}>{children}</PaperProvider>;
};
