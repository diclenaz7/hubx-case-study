import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { resetOnboarding } from "@/redux/slices/onboardingSlice";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ProfileScreen() {
  const completed = useAppSelector((state) => state.onboarding.completed);
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Onboarding completed: {completed ? "Yes" : "No"}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(resetOnboarding())}
      >
        <Text style={styles.buttonText}>Set onboarding = false</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 18, marginBottom: 20 },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
