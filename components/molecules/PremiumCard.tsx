import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function PremiumCard() {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        router.push("/paywall");
      }}
    >
      <View style={styles.premiumContainer}>
        <Image
          source={require("@/assets/images/premium.png")}
          style={styles.premiumImage}
        />
        <View>
          <Text style={[styles.text, { fontWeight: "bold", marginBottom: 4 }]}>
            FREE Premium Available
          </Text>
          <Text style={[styles.text, { fontSize: 13 }]}>
            Tap to upgrade your account!
          </Text>
        </View>
      </View>
      <MaterialIcons name="chevron-right" size={24} color="#E5C990" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginBottom: 24,
    padding: 12,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#24201A",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: { width: "100%", height: 150 },
  text: {
    fontSize: 16,
    fontWeight: "500",
    color: "#E5C990",
  },
  premiumContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  premiumImage: {
    width: 36,
    height: 30,
    marginRight: 8,
  },
});
