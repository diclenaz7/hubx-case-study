import PlantSearchBar from "@/components/atoms/PlantSearchBar";
import { FontSizes } from "@/constants/FontSizes";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeHeader() {
  return (
    <View>
      <ImageBackground
        source={require("@/assets/images/homeHeader.png")}
        style={styles.background}
      >
        <SafeAreaView>
          <Text style={styles.subtitle}>Hi, plant lover!</Text>
          <Text style={styles.title}>Good Afternoon! ⛅️</Text>
          <PlantSearchBar />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
    justifyContent: "center",
  },
  subtitle: {
    fontSize: FontSizes.large,
    fontWeight: "500",
    marginBottom: 4,
  },
  title: {
    fontSize: FontSizes.xxxLarge,
    fontWeight: "bold",
    marginBottom: 4,
  },
});
