import Diagnose from "@/assets/icons/diagnose.svg";
import Home from "@/assets/icons/home.svg";
import MyGarden from "@/assets/icons/myGarden.svg";
import Photo from "@/assets/icons/photo.svg";
import Profile from "@/assets/icons/profile.svg";
import { HapticTab } from "@/components/HapticTab";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Tabs } from "expo-router";
import React from "react";
import { Platform, StyleSheet, View } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.green1,
        tabBarInactiveTintColor: Colors.grey1,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: () => (
          <View style={{ backgroundColor: Colors.white }} />
        ),
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
            backgroundColor: Colors.white,
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Home width={24} height={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="diagnose"
        options={{
          title: "Diagnose",
          tabBarIcon: ({ color }) => (
            <Diagnose width={24} height={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="photo"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <View style={styles.middleIconStyle}>
              <Photo width={25} height={25} color={Colors.white} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="myGarden"
        options={{
          title: "My Garden",
          tabBarIcon: ({ color }) => (
            <MyGarden width={24} height={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Profile width={24} height={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  middleIconStyle: {
    position: "absolute",
    borderRadius: 50,
    backgroundColor: Colors.green1,
    padding: 16,
    borderWidth: 4,
    borderColor: Colors.green2,
  },
});
