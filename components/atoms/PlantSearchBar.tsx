import { Colors } from "@/constants/Colors";
import { FontSizes } from "@/constants/FontSizes";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useState } from "react";
import { Dimensions, StyleSheet, TextInput, View } from "react-native";

const width = Dimensions.get("window").width;
export default function PlantSearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <MaterialIcons name="search" size={24} color={Colors.grey1} />
        <TextInput
          style={styles.input}
          placeholder="Search for plants"
          placeholderTextColor={Colors.grey1}
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 10,
    borderWidth: 0.5,
    borderColor: Colors.grey2,
  },
  input: {
    flex: 1,
    padding: 8,
    fontSize: FontSizes.medium,
  },
});
