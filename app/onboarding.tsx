import { Colors } from "@/constants/Colors";
import { FontSizes } from "@/constants/FontSizes";
import { useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import { completeOnboarding } from "../redux/slices/onboardingSlice";

const { width } = Dimensions.get("window");

const slides = [
  {
    title: "Welcome to PlantApp",
    desc: "Identify more than 3000+ plants and 88% accuracy.",
    image: require("@/assets/images/onboard1.png"),
    button: "Get Started",
  },
  {
    title: null,
    titleImage: require("@/assets/images/onboard2-title.png"),
    desc: "",
    image: require("@/assets/images/onboard2.png"),
    button: "Continue",
  },
  {
    title: null,
    titleImage: require("@/assets/images/onboard3-title.png"),
    desc: "",
    image: require("@/assets/images/onboard3.png"),
    button: "Continue",
  },
];

export default function OnboardingScreen() {
  const [current, setCurrent] = useState(0);
  const ref = useRef<FlatList>(null);
  const router = useRouter();
  const dispatch = useDispatch();

  const nextSlide = () => {
    if (current < slides.length - 1) {
      ref.current?.scrollToIndex({ index: current + 1 });
    } else {
      router.push("/paywall");
    }
  };

  useEffect(() => {
    dispatch(completeOnboarding());
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ref={ref}
        keyExtractor={(_, i) => i.toString()}
        onMomentumScrollEnd={(e) => {
          const index = Math.round(e.nativeEvent.contentOffset.x / width);
          setCurrent(index);
        }}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            {item.title ? (
              <Text style={styles.title}>{item.title}</Text>
            ) : (
              <Image
                source={item.titleImage}
                style={styles.titleImage}
                resizeMode="contain"
              />
            )}
            {item.desc ? <Text style={styles.desc}>{item.desc}</Text> : null}
            <Image
              source={item.image}
              style={styles.image}
              resizeMode="contain"
            />
            <TouchableOpacity onPress={nextSlide} style={styles.button}>
              <Text style={styles.buttonText}>{item.button}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <View style={styles.dots}>
        {slides.map((_, i) => (
          <View
            key={i}
            style={[styles.dot, { opacity: current === i ? 1 : 0.3 }]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slide: {
    width,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 80,
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: "70%",
    marginBottom: 20,
  },
  titleImage: {
    width: width * 0.8,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 10,
  },
  desc: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    backgroundColor: Colors.green1,
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 8,
  },
  buttonText: {
    color: Colors.white,
    fontSize: FontSizes.medium,
    fontWeight: "600",
  },
  dots: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: 40,
    width: "100%",
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: Colors.green1,
    borderRadius: 4,
    marginHorizontal: 4,
  },
});
