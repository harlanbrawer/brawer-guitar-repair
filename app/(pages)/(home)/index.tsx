import { StyleSheet, View, Image } from "react-native";
import { useTheme } from "react-native-paper";

import { AboutMe } from "../../../components";

export default function Homepage() {
  const { colors } = useTheme();
  return (
    <View style={styles.horizontalContainer}>
      <View
        style={{
          ...styles.leftPane,
          backgroundColor: colors.secondary,
        }}
      >
        <Image
          style={{
            ...styles.image,
          }}
          source={{ uri: "../../../assets/gary_profile.jpg" }}
        />
      </View>
      <AboutMe />
    </View>
  );
}

const styles = StyleSheet.create({
  horizontalContainer: {
    flex: 1,
    flexDirection: "row",
    height: "100%",
    flexWrap: "wrap",
  },
  leftPane: {
    flexGrow: 1,
    maxWidth: 400,
    minWidth: 300,
    width: "auto",
    flexDirection: "column",
  },
  image: {
    resizeMode: "stretch",
    aspectRatio: 0.95,
    width: "100%",
    height: "auto",
  },
});

Homepage.displayName = "Homepage";
