import { usePathname, useRouter } from "expo-router";
import { FC } from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { Appbar, useTheme } from "react-native-paper";

import { useThemedStyleSheet } from "../../src";

export const TopBanner: FC = () => {
  const router = useRouter();
  const currentPathname = usePathname();
  const theme = useTheme();
  const styles = useThemedStyleSheet(createStyles);

  return (
    <Appbar.Header style={styles.header}>
      <TouchableOpacity onPress={() => router.push("/")}>
        <Image
          source={require("../../assets/brawer_guitar_logo.jpg")}
          style={styles.logo}
        />
      </TouchableOpacity>
      <Appbar.Action
        iconColor={theme.colors.secondary}
        style={{
          backgroundColor:
            currentPathname === "/" ? theme.colors.tertiary : undefined,
        }}
        icon="home"
        size={40}
        onPress={() => router.push("/")}
      />
      <Appbar.Action
        iconColor={theme.colors.secondary}
        style={{
          backgroundColor:
            currentPathname === "/contact" ? theme.colors.tertiary : undefined,
        }}
        icon="email"
        size={40}
        onPress={() => router.push("/contact")}
      />
    </Appbar.Header>
  );
};

const createStyles = () =>
  StyleSheet.create({
    logo: {
      width: 120,
      height: 70,
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
    },
    header: {
      paddingLeft: 0,
    },
  });
