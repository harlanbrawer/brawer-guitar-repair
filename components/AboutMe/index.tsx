import type { FC } from "react";
import { View, StyleSheet } from "react-native";
import { useTheme, Text, Divider } from "react-native-paper";

export const AboutMe: FC = () => {
  const { colors } = useTheme();

  return (
    <View
      style={{
        ...styles.aboutMe,
        backgroundColor: colors.onBackground,
      }}
    >
      <Text style={{ color: colors.secondary }} variant="headlineLarge">
        Gary Brawer
      </Text>
      <Divider style={{ borderColor: "black" }} />
      <Text style={{ color: colors.primary }} variant="bodyLarge">
        With over four decades of dedicated craftsmanship, Gary Brawer stands as
        a venerable figure in the vibrant Bay Area guitar community. Renowned
        for an unwavering commitment to quality and an unbridled passion for the
        art of lutherie, Gary has meticulously crafted instruments that resonate
        with musicians and collectors alike.
      </Text>
      <Text style={{ color: colors.primary }} variant="bodyLarge">
        Since establishing his workshop in [year of establishment], Gary has
        honed his skills, blending traditional techniques with innovative
        approaches to create instruments that are not just tools of the trade,
        but embodiments of musical expression. Each guitar crafted by Gary is a
        testament to his pursuit of perfection, meticulously sculpted from the
        finest materials and imbued with a soulful resonance that captivates
        both player and audience.
      </Text>
      <Text style={{ color: colors.primary }} variant="bodyLarge">
        Beyond his mastery of the craft, Gary is celebrated for his personalized
        approach to each project. Whether collaborating with seasoned
        professionals or aspiring artists, Gary takes the time to understand the
        unique vision and musical aspirations of every client, ensuring that
        each instrument is a true reflection of its owner's identity.
      </Text>
      <Text style={{ color: colors.primary }} variant="bodyLarge">
        As a cornerstone of the Bay Area music scene, Gary has earned the trust
        and admiration of fellow musicians, collectors, and enthusiasts alike.
        His workshop serves as a hub of creativity and craftsmanship, where the
        rich heritage of lutherie meets the cutting edge of innovation.
      </Text>
      <Text style={{ color: colors.primary }} variant="bodyLarge">
        Explore the legacy of Gary Brawer and experience the artistry of a true
        master. Welcome to a world where every strum tells a story, and every
        chord resonates with passion.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  aboutMe: {
    padding: 10,
    flex: 1,
    gap: 10,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    minWidth: 300,
  },
});
