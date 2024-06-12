import { FC } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Card, Title, Paragraph, MD3Theme } from "react-native-paper";

import { useThemedStyleSheet } from "../../../src";

const HomePage: FC = () => {
  const styles = useThemedStyleSheet(createStyles);

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Image
          source={{ uri: "../../../assets/gary_profile.jpg" }}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Title style={styles.title}>Gary Brawer Guitar and Bass Repair</Title>
          <Paragraph style={styles.paragraph}>
            Gary Brawer has been repairing guitars and basses for over 40 years.
            His expertise in instrument repair is unparalleled, and he has
            worked with some of the biggest names in the music industry. Whether
            you need a simple setup or a complex repair, Gary has the skills and
            experience to get your instrument playing its best.
          </Paragraph>
        </View>
      </Card>
    </View>
  );
};

const createStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 16,
      backgroundColor: theme.colors.secondary,
    },
    card: {
      flexDirection: "row",
      backgroundColor: theme.colors.secondary,
      borderColor: theme.colors.primary,
      borderWidth: 1,
      padding: 16,
    },
    image: {
      width: 300,
      height: 300,
    },
    textContainer: {
      flex: 1,
      justifyContent: "center",
    },
    title: {
      color: theme.colors.primary,
      fontSize: 30,
      fontWeight: "400",
      marginBottom: 8,
    },
    paragraph: {
      color: theme.colors.primary,
    },
  });

export default HomePage;
