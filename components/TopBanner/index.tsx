import { Link } from "expo-router";
import type { FC } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button, useTheme, Text } from "react-native-paper";

export const TopBanner: FC = () => {
  const { colors } = useTheme();

  return (
    <View
      style={{
        ...styles.TopBannerContainer,
        backgroundColor: colors.backdrop,
      }}
    >
      <Image
        style={{
          width: "100%",
          height: "100%",
          resizeMode: "repeat",
          position: "absolute",
        }}
        source={{ uri: "../../../assets/zoomed_fretboard.png" }}
      />
      <Link href="/" asChild>
        <Image
          style={{
            minWidth: 100,
            width: 200,
            height: 100,
            resizeMode: "stretch",
          }}
          source={{ uri: "../../../assets/brawer_guitar_logo.jpg" }}
        />
      </Link>
      <View
        style={{
          flexDirection: "row",
          flexShrink: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link href="/" asChild>
          <Button
            icon="home"
            mode="contained"
            style={{
              backgroundColor: colors.primary,
              borderColor: colors.onPrimary,
              borderWidth: 3,
            }}
          >
            <Text style={{ color: colors.onPrimary }}>About Me</Text>
          </Button>
        </Link>
        <Link href="/contact" asChild>
          <Button
            icon="email"
            mode="contained"
            style={{
              backgroundColor: colors.primary,
              borderColor: colors.onPrimary,
              borderWidth: 3,
            }}
          >
            <Text style={{ color: colors.onPrimary }}>Contact</Text>
          </Button>
        </Link>
      </View>
      {/* <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          flexDirection: "row",
          height: "100%",
          alignItems: "center",
          width: 280,
        }}
      >
        <Text
          style={{
            padding: 5,
            width: 280,
            fontSize: 40,
            backgroundColor: "#111111",
            height: "100%",
            flexWrap: "wrap",
            fontFamily: "impact",
          }}
        >
          Brawer Guitar and Bass Repair
        </Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  TopBannerContainer: {
    // flex: 1,
    flexWrap: "wrap",
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    // width: "100%",
    // height: 100,
  },
});
