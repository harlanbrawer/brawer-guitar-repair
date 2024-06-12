import { FC } from "react";
import { ScrollView, StyleSheet } from "react-native";
import {
  Card,
  Title,
  Paragraph,
  List,
  MD3Theme,
  useTheme,
} from "react-native-paper";

import { useThemedStyleSheet } from "../../../src";

const ContactPage: FC = () => {
  const theme = useTheme();
  const styles = useThemedStyleSheet(createStyles);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Contact Info</Title>
          <Paragraph style={styles.paragraph}>Email: gary@brawer.com</Paragraph>
          <Paragraph style={styles.paragraph}>
            Address: 1006 Pardee St. Berkeley, CA 94710
          </Paragraph>
          <Paragraph style={styles.paragraph}>Phone: (415) 621-3904</Paragraph>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>How do I book an appointment?</Title>
          <Paragraph style={styles.paragraph}>
            Email <Paragraph style={styles.email}>gary@brawer.com</Paragraph>{" "}
            with the following information:
          </Paragraph>
          <List.Section>
            <List.Item
              title="1. Your name"
              titleStyle={styles.listItemTitle}
              titleNumberOfLines={2}
              left={() => (
                <List.Icon icon="account" color={theme.colors.primary} />
              )}
            />
            <List.Item
              title="2. Your phone number"
              titleStyle={styles.listItemTitle}
              titleNumberOfLines={2}
              left={() => (
                <List.Icon icon="phone" color={theme.colors.primary} />
              )}
            />
            <List.Item
              title="3. A description of the problem"
              titleStyle={styles.listItemTitle}
              titleNumberOfLines={2}
              left={() => (
                <List.Icon icon="message-text" color={theme.colors.primary} />
              )}
            />
          </List.Section>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const createStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: "center",
      padding: 16,
      backgroundColor: theme.colors.secondary,
    },
    card: {
      margin: 16,
      backgroundColor: theme.colors.secondary,
      borderColor: theme.colors.primary,
      borderWidth: 1,
    },
    title: {
      color: theme.colors.primary,
      marginBottom: 8,
    },
    paragraph: {
      color: theme.colors.primary,
      marginBottom: 4,
    },
    email: {
      fontWeight: "bold",
      color: theme.colors.primary,
    },
    listItemTitle: {
      color: theme.colors.primary,
    },
  });

export default ContactPage;
