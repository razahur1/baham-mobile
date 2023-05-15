import { StyleSheet, Text, View } from "react-native";

export default function AppHeader(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.heading}>{props.heading}</Text>
      <Text style={styles.slogan}>{props.slogan}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
        flex: 0.15,
        padding: 15,
        backgroundColor: "pink", 
    },
    heading: {
        paddingBottom: 5, 
        fontSize: 30, 
        textAlign: 'center' 
    },
    slogan: {
        paddingBottom: 5, 
        fontSize: 18, 
        textAlign: 'center', 
        fontStyle: 'italic' 
    }
});
