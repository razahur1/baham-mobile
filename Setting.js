import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Notification</Text>
        <Text style={styles.settingValue}>On</Text>
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Language</Text>
        <Text style={styles.settingValue}>English</Text>
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Dark Mode</Text>
        <Text style={styles.settingValue}>Off</Text>
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Push Notifications</Text>
        <Text style={styles.settingValue}>On</Text>
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Location Services</Text>
        <Text style={styles.settingValue}>On</Text>
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Email Notifications</Text>
        <Text style={styles.settingValue}>Off</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "green",
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  settingLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color:"blue"
  },
  settingValue: {
    fontSize: 18,
    color: "#888",
  },
});

export default SettingsScreen;
