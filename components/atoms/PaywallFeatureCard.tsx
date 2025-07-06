import Plant from "@/assets/icons/diagnose.svg";
import Photo from "@/assets/icons/photo.svg";
import { Colors } from "@/constants/Colors";
import { FontSizes } from "@/constants/FontSizes";
import { StyleSheet, Text, View } from "react-native";

const getSvgIcon = (icon: string) => {
  switch (icon) {
    case "photo":
      return <Photo color={Colors.white} />;
    case "plant":
      return <Plant color={Colors.white} />;
  }
};

export default function PaywallFeatureCard({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: string;
}) {
  return (
    <View style={styles.featureCard}>
      <View style={styles.iconContainer}>{getSvgIcon(icon)}</View>

      <Text style={styles.featureTitle}>{title}</Text>
      <Text style={styles.featureDesc}>{desc}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  featureCard: {
    backgroundColor: Colors.transparentBackground,
    padding: 16,
    borderRadius: 14,
    justifyContent: "center",
    width: "50%",
    height: 130,
  },
  featureTitle: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: FontSizes.medium,
    marginBottom: 4,
  },
  featureDesc: { color: "#ddd", fontSize: FontSizes.xSmall },
  iconContainer: {
    backgroundColor: "rgba(0,0,0,0.2)",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
