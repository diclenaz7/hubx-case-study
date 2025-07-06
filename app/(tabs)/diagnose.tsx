import { StyleSheet, Text, View } from "react-native";

export default function DiagnoseScreen() {
  return (
    <View style={styles.container}>
      <Text>DIAGNOSE PAGE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
