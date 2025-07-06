import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { Slot, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { LogBox } from "react-native";
import "react-native-reanimated";
LogBox.ignoreLogs(["Warning: ..."]);
LogBox.ignoreAllLogs();

import { store } from "@/redux/store";
import { Provider, useSelector } from "react-redux";

export default function RootLayout() {
  const queryClient = new QueryClient();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RootNavigator />
        <StatusBar style="dark" />
      </Provider>
    </QueryClientProvider>
  );
}

function RootNavigator() {
  const router = useRouter();
  const onboardingCompleted = useSelector(
    (state: any) => state.onboarding.completed
  );

  useEffect(() => {
    if (!onboardingCompleted) {
      router.replace("/onboarding");
    }
  }, [onboardingCompleted]);

  return <Slot />;
}
