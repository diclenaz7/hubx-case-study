import PaywallFeatureCard from "@/components/atoms/PaywallFeatureCard";
import PlanOption from "@/components/atoms/PaywallPlanOption";
import { Colors } from "@/constants/Colors";
import { FontSizes } from "@/constants/FontSizes";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
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
        <MaterialIcons name="close" size={18} color={Colors.white} />
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

          <View style={{ flexDirection: "row", flex: 1 }}>
            <ScrollView
              horizontal
              contentContainerStyle={[
                styles.featuresContainer,
                { paddingHorizontal: 20, paddingRight: 200 },
              ]}
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
          </View>

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
            Auto-Renewable
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
    backgroundColor: Colors.transparentBackground4,
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
  },
  headerContainer: { marginBottom: 20, marginHorizontal: 20 },
  title: { fontSize: 28, fontWeight: "700", color: "#fff" },
  subtitle: { fontSize: 16, color: "#fff", marginTop: 4 },
  featuresContainer: {
    gap: 12,
    alignItems: "center",
  },
  plansContainer: { marginTop: 15, marginBottom: 10 },
  ctaButton: {
    backgroundColor: Colors.green2,
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
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
