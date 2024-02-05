import { StyleSheet, View } from "react-native";
import { useTheme, Text, Divider } from "react-native-paper";

export default function ContactPage() {
  const { colors } = useTheme();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.leftPanel}>
        <Text style={{ color: colors.onPrimary }} variant="headlineLarge">
          Contact Info
        </Text>
        <Divider />
        <Text style={{ color: colors.onPrimary }} variant="bodyLarge">
          gary@brawer.com
        </Text>
        <Text style={{ color: colors.onPrimary }} variant="bodyLarge">
          1006 Pardee St. Berkeley, CA 94710
        </Text>
      </View>
      <View style={styles.rightPanel}>
        <Text style={{ color: colors.onPrimary }} variant="headlineLarge">
          How do I book an appointment?
        </Text>
        <Text style={{ color: colors.onPrimary }} variant="bodyLarge">
          Email Gary at gary@brawer.com with the following information:
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "row",
  },
  leftPanel: {
    flexGrow: 0,
    width: 300,
  },
  rightPanel: {
    flex: 1,
  },
});
