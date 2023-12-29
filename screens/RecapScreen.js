import { StyleSheet, Text, View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import ExpenseItem from "./components/ExpenseItem";

function RecapScreen() {
  const expenses = useSelector((state) => state.data);
  const total = expenses.reduce((acc, expense) => {
    return acc + parseFloat(expense.amount);
  }, 0);

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.list}
        keyExtractor={(item, idx) => {
          return item.id;
        }}
        data={expenses}
        renderItem={(itemData) => {
          return (
            <ExpenseItem
              expense={itemData.item}
              color={itemData.item.category.color}
            />
          );
        }}
      />
      <Text style={styles.text}>Total : ${total}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcd9d9",
    justifyContent: "space-evenly",
  },
  list: {},
  text: {
    fontSize: 20,
    textAlign: "center",
    padding: 10,
    margin: 10,
    backgroundColor: "#ffffff",
  },
});

export default RecapScreen;
