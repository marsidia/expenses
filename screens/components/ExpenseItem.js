import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { removeExpense } from "../../store";

function ExpenseItem({ expense, color }) {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    Alert.alert("Delete", "Are you sure you want to delete this expense?", [
      {
        text: "Cancel",

        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => {
          dispatch(removeExpense(expense.id));
        },
      },
    ]);
  };
  return (
    <View style={{ ...styles.container, backgroundColor: color }}>
      <View style={styles.leftContainer}>
        <Text style={styles.dateText}>
          {new Date(expense.date).toDateString()}
        </Text>
        <Text style={styles.nameText}>{expense.name}</Text>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.rightTextContainer}>
          <Text style={styles.amountText}>${expense.amount}</Text>
          <Text style={styles.categoryText}>{expense.category.name}</Text>
        </View>
        <Pressable onPress={deleteHandler} style={styles.deleteBtn}>
          <Text>Delete</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    padding: 10,
    alignItems: "stretch",
    borderRadius: 20,
  },
  leftContainer: {},
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightTextContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  nameText: {
    fontSize: 20,
    color: "#ffffff",
  },
  amountText: {
    fontSize: 30,
    color: "#ffffff",
  },
  categoryText: {},
  deleteBtn: {
    backgroundColor: "#ffffff",
    padding: 5,
    borderRadius: 50,
    margin: 5,
    color: "#ffffff",
  },
  dateText: {
    color: "#ffffff",
  },
});

export default ExpenseItem;
