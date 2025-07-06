import { fetchCategories, fetchQuestions } from "@/app/api";
import CategoryCard from "@/components/molecules/CategoryCard";
import HomeHeader from "@/components/molecules/HomeHeader";
import PremiumCard from "@/components/molecules/PremiumCard";
import QuestionCard from "@/components/molecules/QuestionCard";
import { FontSizes } from "@/constants/FontSizes";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function HomeScreen() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const {
    data: questions,
    isLoading: isLoadingQuestions,
    isError: isErrorQuestions,
  } = useQuery({
    queryKey: ["questions"],
    queryFn: fetchQuestions,
  });

  console.log("questions", questions);

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#4CAF50" />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.center}>
        <Text>Something went wrong fetching categories.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#FBFAFA" }}>
      <HomeHeader />
      <View style={{ padding: 24 }}>
        <PremiumCard />
        <Text style={styles.title}>Get Started</Text>
      </View>
      <FlatList
        data={questions}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => {
          console.log("item", item);
          return (
            <QuestionCard
              index={index}
              question={item.title}
              image={item.image_uri}
            />
          );
        }}
      />
      <View style={{ padding: 24, paddingBottom: 100 }}>
        <FlatList
          data={data.data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return <CategoryCard name={item.title} image={item.image.url} />;
          }}
          numColumns={2}
          key={"flatlist-2"}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          contentContainerStyle={{ gap: 16 }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: FontSizes.medium,
    fontWeight: "bold",
  },
});
