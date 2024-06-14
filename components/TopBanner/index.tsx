import { useRouter } from "expo-router";
import { FC } from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { Appbar } from "react-native-paper";

export const TopBanner: FC = () => {
  const router = useRouter();

  return (
    <Appbar.Header style={styles.header}>
      <TouchableOpacity onPress={() => router.push("/")}>
        <Image
          source={require("../../assets/brawer_guitar_logo.jpg")}
          style={styles.logo}
        />
      </TouchableOpacity>
      <Appbar.Action
        iconColor="white"
        icon="home"
        size={40}
        onPress={() => router.push("/")}
      />
      <Appbar.Action
        iconColor="white"
        icon="email"
        size={35}
        onPress={() => router.push("/contact")}
      />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 120,
    height: 70,
  },
  header: {
    paddingLeft: 0,
  },
});
