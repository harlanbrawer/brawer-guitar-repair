import { StyleSheet } from "react-native";
import { MD3Theme, useTheme } from "react-native-paper";

export const useThemedStyleSheet = <
  T extends ReturnType<typeof StyleSheet.create>,
>(
  createStyleSheet: ((theme: MD3Theme) => T) | (() => T),
): T => {
  const theme = useTheme();
  return createStyleSheet(theme);
};
