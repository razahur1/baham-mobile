import { StyleSheet, Text, View } from "react-native";

export default function AppFooter(props) {
    return (
        <View style={styles.footer}>
            <Text style={styles.copyright}> {props.copyright}</Text>
            <Text style={styles.span}>{props.span}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        flex: 0.10,
        marginTop: 5
    },
    copyright: {
        textAlign: 'center',
    },
    span: {
        fontStyle: 'italic',
        textAlign: 'center',
    }
});
