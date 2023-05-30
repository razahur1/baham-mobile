import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";


const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Baham Mobile Car Application!</Text>
      <Text style={styles.subtitle}>Find your dream car on the go.</Text>
      <Button
      
        title="Go to Menu"
        onPress={() => navigation.navigate("Menu")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color:'green'
  },
  subtitle: {
    fontSize: 18,
    color: "#888",
    marginBottom: 16,
  },

});

export default HomeScreen;
