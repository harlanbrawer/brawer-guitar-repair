import { useRouter } from "expo-router";
import { FC } from "react";
import { StyleSheet, View, Image } from "react-native";
import {
  Card,
  Title,
  Paragraph,
  MD3Theme,
  Button,
  Text,
  Icon,
} from "react-native-paper";

import { useThemedStyleSheet } from "../../../src";

const HomePage: FC = () => {
  const router = useRouter();
  const styles = useThemedStyleSheet(createStyles);

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <View style={{ maxWidth: 400 }}>
          <Image
            source={require("../../../assets/gary_profile.jpg")}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
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
        <Button
          mode="contained"
          onPress={() => router.push("/contact")}
          style={styles.appointmentButton}
        >
          <Icon source={"email"} size={20} />
          <Text style={styles.appointmentButtonText}>Book an Appointment</Text>
        </Button>
      </Card>
    </View>
  );
};

const createStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      padding: 16,
      backgroundColor: theme.colors.secondary,
    },
    card: {
      flexDirection: "column",
      backgroundColor: theme.colors.secondary,
      borderColor: theme.colors.primary,
      borderWidth: 1,
      padding: 16,
    },
    image: {
      width: "100%",
      height: "auto",
      aspectRatio: 1,
      borderRadius: 5,
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
    appointmentButton: {
      marginTop: 16,
      color: theme.colors.primary,
      alignSelf: "center",
    },
    appointmentButtonText: {
      fontSize: 18,
      paddingLeft: 5,
    },
  });

export default HomePage;
