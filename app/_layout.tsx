import { Slot } from "expo-router";
import type { FC } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { useTheme } from "react-native-paper";

import { PaperRoot, TopBanner } from "../components";

const PageWrapper: FC = () => {
  const theme = useTheme();

  return (
    <ScrollView
      style={{
        ...styles.TopPageLayout,
        backgroundColor: theme.colors.background,
      }}
    >
      <TopBanner />
      <Slot />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  TopPageLayout: {
    flex: 1,
  },
});

export default function AppRoot() {
  // wrap slot with root contexts
  return (
    <PaperRoot>
      <PageWrapper />
    </PaperRoot>
  );
}
