import { Colors } from "@/constants/Colors";
import { FontSizes } from "@/constants/FontSizes";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function CategoryCard({
  name,
  image,
}: {
  name: string;
  image: string;
}) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: Colors.white,
    elevation: 3, // android shadow
    shadowColor: "#000", // ios shadow
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    borderWidth: 1,
    borderColor: Colors.grey2,
  },
  image: { width: "100%", height: 150 },
  text: {
    position: "absolute",
    top: 4,
    left: 4,
    right: 0,
    padding: 12,
    fontSize: FontSizes.medium,
    fontWeight: "500",
    width: "70%",
    flexWrap: "wrap",
  },
});
