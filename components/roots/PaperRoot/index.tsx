import type { FC, ReactNode } from "react";
import { MD3DarkTheme, PaperProvider } from "react-native-paper";

const customThemeBlackWhite = {
  colors: {
    primary: "#00000F",
    onPrimary: "#FFFFF0",
    primaryContainer: "rgb(124, 45, 18)",
    onPrimaryContainer: "rgb(255, 219, 208)",
    secondary: "rgb(0, 0, 0)",
    onSecondary: "rgb(255, 255, 255)",
    secondaryContainer: "rgb(0, 79, 88)",
    onSecondaryContainer: "rgb(151, 240, 255)",
    tertiary: "#1c1200",
    onTertiary: "rgb(0, 53, 69)",
    tertiaryContainer: "rgb(0, 77, 99)",
    onTertiaryContainer: "rgb(188, 233, 255)",
    error: "rgb(255, 180, 171)",
    onError: "rgb(105, 0, 5)",
    errorContainer: "rgb(147, 0, 10)",
    onErrorContainer: "rgb(255, 180, 171)",
    background: "rgb(0, 0, 0)",
    onBackground: "#FFFFF0",
    surface: "rgb(32, 26, 24)",
    onSurface: "rgb(237, 224, 220)",
    surfaceVariant: "rgb(83, 67, 63)",
    onSurfaceVariant: "rgb(216, 194, 188)",
    outline: "rgb(160, 141, 135)",
    outlineVariant: "rgb(83, 67, 63)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(237, 224, 220)",
    inverseOnSurface: "rgb(54, 47, 45)",
    inversePrimary: "rgb(155, 68, 39)",
    elevation: {
      level0: "transparent",
      level1: "rgb(43, 34, 31)",
      level2: "rgb(50, 38, 35)",
      level3: "rgb(57, 43, 39)",
      level4: "rgb(59, 45, 40)",
      level5: "rgb(63, 48, 43)",
    },
    surfaceDisabled: "rgba(237, 224, 220, 0.12)",
    onSurfaceDisabled: "rgba(237, 224, 220, 0.38)",
    backdrop: "rgba(0, 0, 0, 0.4)",
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
