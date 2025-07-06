import PaywallFeatureCard from "@/components/atoms/PaywallFeatureCard";
import PlanOption from "@/components/atoms/PaywallPlanOption";
import { Colors } from "@/constants/Colors";
import { FontSizes } from "@/constants/FontSizes";
import { useRouter } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function PaywallScreen() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = React.useState("year");

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/paywallPlant.png")}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      <TouchableOpacity
        onPress={() => router.replace("/")}
        style={styles.closeBtn}
      >
        <Text style={styles.closeText}>×</Text>
      </TouchableOpacity>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <SafeAreaView>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>
              PlantApp <Text style={{ fontWeight: "400" }}>Premium</Text>
            </Text>
            <Text style={styles.subtitle}>Access All Features</Text>
          </View>

          <ScrollView
            horizontal
            contentContainerStyle={styles.featuresContainer}
            showsHorizontalScrollIndicator={false}
          >
            <PaywallFeatureCard
              title="Unlimited"
              desc="Plant Identify"
              icon="photo"
            />
            <PaywallFeatureCard title="Faster" desc="Process" icon="plant" />
            <PaywallFeatureCard
              title="Detailed"
              desc="Plant Guides"
              icon="plant"
            />
          </ScrollView>

          <View style={styles.plansContainer}>
            <PlanOption
              title="1 Month"
              desc="$2.99/month, auto renewable"
              selected={selectedPlan === "month"}
              onPress={() => setSelectedPlan("month")}
            />
            <PlanOption
              title="1 Year"
              desc="First 3 days free, then $529.99/year"
              badge="Save 50%"
              selected={selectedPlan === "year"}
              onPress={() => setSelectedPlan("year")}
            />
          </View>

          <TouchableOpacity style={styles.ctaButton}>
            <Text style={styles.ctaText}>Try free for 3 days</Text>
          </TouchableOpacity>

          <Text style={styles.footer}>
            After the 3-day free trial period you’ll be charged ₺274.99 per year
            unless you cancel before the trial expires. Yearly Subscription is
            Auto-Renewable{"\n"}
          </Text>
          <Text style={[styles.footer, { fontSize: 12, color: "#888" }]}>
            Terms • Privacy • Restore
          </Text>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101E17",
    justifyContent: "flex-end",
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.7,
  },
  closeBtn: {
    position: "absolute",
    top: 50,
    right: 20,
    zIndex: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  closeText: { color: "#fff", fontSize: 20 },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "flex-end",
    padding: 12,
  },
  headerContainer: { marginBottom: 20 },
  title: { fontSize: 28, fontWeight: "700", color: "#fff" },
  subtitle: { fontSize: 16, color: "#fff", marginTop: 4 },
  featuresContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    marginTop: 20,
  },
  plansContainer: { paddingVertical: 20 },
  ctaButton: {
    backgroundColor: Colors.green2,
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 10,
  },
  ctaText: {
    color: Colors.white,
    fontSize: FontSizes.medium,
    fontWeight: "600",
  },
  footer: {
    textAlign: "center",
    fontSize: FontSizes.xSmall,
    color: Colors.grey1,
    marginTop: 10,
    paddingHorizontal: 24,
  },
});
