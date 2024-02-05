import {
  StyleSheet,
  type ImageStyle,
  type TextStyle,
  type ViewStyle,
} from "react-native";

//WIP
export const createExtendableStyleSheet =
  (styleSheets: Parameters<typeof StyleSheet.create>[0]) =>
  (overrides: ViewStyle | TextStyle | ImageStyle) => {
    const entries = Object.entries(styleSheets);
    entries.map(([styleSheetName, styles]) => [
      styleSheetName,
      { ...styles, ...overrides },
    ]);
    return StyleSheet.create(Object.fromEntries(entries));
  };

// export const createExtendableStyleSheet2 =
//   (styleSheets: Parameters<typeof StyleSheet.create>[0]) =>
//   (overrides: ViewStyle | TextStyle | ImageStyle) =>
//     Object.entries(styleSheets).reduce(
//       (accumulatedStyleSheet, [styleSheetName, styles]) => ({
//         ...accumulatedStyleSheet,
//         [styleSheetName]: { ...styles, ...overrides },
//       }),
//     );
