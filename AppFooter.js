import { StyleSheet, Text, View } from "react-native";

export default function AppFooter() {
  return (
    <View style={styles.container}>
      <Text sylte={styles.footer}>
        Copyright: Baham by Disruptors:
          Karachi Insitute of Economics & Technology
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    backgroundColor: "brown",
    alignItems:"center"
  },
  footer: {
    textAlign: "auto",
    color: "white",
  },
});
