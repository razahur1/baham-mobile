import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AboutUsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.description}>
        Welcome to Baham Mobile Car Application! We are a car services platform
        dedicated to providing you with the best car-related services right at
        your fingertips.
      </Text>
      <Text style={styles.description}>
        Our application offers a seamless experience for buying, selling, and
        renting cars. Browse through our extensive collection of new and used
        cars, complete with detailed specifications, images, and pricing
        information. With our advanced search filters, you can easily find the
        perfect car that matches your preferences and budget.
      </Text>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.75,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    color:"green"
  },
  description: {
    fontSize: 20,
    lineHeight: 26,
    marginBottom: 16,
    textAlign:"center",
    borderWidth:2
  },
});

export default AboutUsScreen;
