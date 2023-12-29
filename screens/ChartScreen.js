import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { categories } from "./components/CategoryPicker";
import PieChart from "react-native-expo-pie-chart";

function ChartScreen() {
  const expenses = useSelector((state) => state.data);

  const bb = categories.map((category) => {
    return { ...category, count: 0 };
  });
  const sections = expenses.reduce((acc, cur) => {
    acc[parseInt(cur.category.id)].count += parseInt(cur.amount);

    return acc;
  }, bb);

  const details = categories.map((category) => (
    <View style={styles.detail} key={category.id}>
      <View
        style={{ ...styles.detailsSquare, backgroundColor: category.color }}
      ></View>
      <Text style={styles.detailsText}>{category.name}</Text>
    </View>
  ));

  return (
    <View style={styles.container}>
      <PieChart data={sections} length={300} />
      <View style={styles.details}>{details}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcd9d9",
    alignItems: "center",
    justifyContent: "center",
  },
  details: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "80%",
    gap: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 10,
  },
  detail: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    padding: 5,
  },
  detailsSquare: {
    height: 10,
    width: 10,
  },
  detailsText: {},
});

export default ChartScreen;
