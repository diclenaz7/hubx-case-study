import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function QuestionCard({
  index,
  question,
  image,
}: {
  index: number;
  question: string;
  image: string;
}) {
  console.log("question", question);
  return (
    <View style={[styles.card, { marginLeft: index === 0 ? 24 : 0 }]}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.text}>{question}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginRight: 10,
    width: 240,
    height: 164,
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  image: { width: "100%", height: "100%" },
  text: {
    position: "absolute",
    top: 100,
    left: 0,
    right: 0,
    padding: 12,
    fontSize: 15,
    fontWeight: "500",
    color: "#fff",
  },
});
