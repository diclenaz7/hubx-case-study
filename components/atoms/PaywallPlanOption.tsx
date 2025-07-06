import { Colors } from "@/constants/Colors";
import { FontSizes } from "@/constants/FontSizes";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import RadioGroup from "react-native-radio-buttons-group";

export default function PlanOption({
  title,
  desc,
  badge,
  selected,
  onPress,
}: {
  title: string;
  desc: string;
  badge?: string;
  selected: boolean;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.planOption,
        selected && { borderColor: Colors.green2, borderWidth: 2 },
      ]}
    >
      <RadioGroup
        radioButtons={[
          {
            id: "1",
            value: "1",
            color: Colors.green1,
            borderColor: selected ? Colors.green1 : Colors.white,
          },
        ]}
        onPress={onPress}
        selectedId={selected ? "1" : undefined}
      />
      <View>
        <Text style={styles.planTitle}>{title}</Text>
        <Text style={styles.planDesc}>{desc}</Text>
      </View>
      {badge ? (
        <View style={styles.badgeContainer}>
          <Text style={styles.badge}>{badge}</Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  planOption: {
    backgroundColor: Colors.transparentBackground,
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    marginHorizontal: 20,
    flexDirection: "row",
  },
  planTitle: {
    fontSize: FontSizes.medium,
    fontWeight: "600",
    color: Colors.white,
  },
  planDesc: { fontSize: FontSizes.medium, color: Colors.white },
  badgeContainer: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  badge: {
    backgroundColor: Colors.green2,
    color: Colors.white,
    fontSize: FontSizes.small,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 12,
    padding: 4,
    paddingHorizontal: 16,
    fontWeight: "bold",
  },
  radioButton: {
    backgroundColor: Colors.green1,
    borderRadius: 16,
  },
});
