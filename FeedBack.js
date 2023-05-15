import { TextInput, View, Button, StyleSheet } from "react-native";
import { useState } from "react";

const Feedback = () => {
  const [value, setFeedback] = useState('');
  
  return (
    <View style= {styles.container}>
      <TextInput
        multiline
        value={value}
        style={styles.feedback}
        onChangeText={(text) => setFeedback()}
        placeholder="Enter your Feedback..."
      />
      <Button title="Submit"/>
    </View>
  );
};

export default Feedback;

const styles = StyleSheet.create({
    container: {
        marginBottom:10
    },
    feedback: {
        padding: 30,
        margin: 20,
        backgroundColor: "white"
    },
  });