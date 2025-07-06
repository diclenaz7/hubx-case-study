import { StyleSheet, Text, View } from "react-native";

export default function PhotoScreen() {
  return (
    <View style={styles.container}>
      <Text>PHOTO PAGE</Text>
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
