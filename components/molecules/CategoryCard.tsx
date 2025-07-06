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
      <View style={styles.textContainer}>
        <Text style={styles.text} numberOfLines={2}>
          {name}
        </Text>
      </View>
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
    borderWidth: 0.5,
    borderColor: Colors.grey2,
  },
  image: { width: "100%", height: 150 },
  textContainer: {
    position: "absolute",
    top: 16,
    left: 16,
    maxWidth: "70%",
    flexShrink: 1,
  },
  text: {
    fontSize: FontSizes.medium,
    fontWeight: "500",
    flexWrap: "wrap",
  },
});
