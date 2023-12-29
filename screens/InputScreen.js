import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  Alert,
} from "react-native";
import { useDispatch } from "react-redux";
import { addExpense } from "../store";
import CategoryPicker from "./components/CategoryPicker";

function InputScreen() {
  const dispatch = useDispatch();
  const [currentName, setCurrentName] = useState("");
  const [currentAmount, setCurrentAmount] = useState("");
  const [currentCategory, setCurrentCategory] = useState({
    id: "6",
    name: "Others",
    color: "#8f8f8f",
  });
  const submitHandler = () => {
    setCurrentName("");
    setCurrentAmount("");
    if (currentName === "" || currentAmount === "") {
      Alert.alert("Error", "Please provide a name and an amount", [
        {
          text: "OK",
        },
      ]);
    } else {
      Alert.alert("Success", "Expense added", [
        {
          text: "OK",
        },
      ]);
      dispatch(
        addExpense({
          name: currentName,
          amount: currentAmount,
          date: new Date().toISOString(),
          category: currentCategory,
        })
      );
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <TextInput
          style={styles.nameInput}
          placeholder="New expense"
          value={currentName}
          onChangeText={setCurrentName}
        />
        <TextInput
          style={styles.amountInput}
          placeholder="Amount"
          keyboardType="decimal-pad"
          value={currentAmount.toString()}
          onChangeText={(entry) => setCurrentAmount(entry.replace(",", "."))}
        />
        <CategoryPicker
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
        />
        <Pressable onPress={submitHandler} style={styles.submitButton}>
          <Text style={styles.submitText}>Submit</Text>
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcd9d9",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  nameInput: {
    backgroundColor: "#f0bebe",
    width: "90%",
    height: 50,
    borderRadius: 50,
    textAlign: "center",
  },
  amountInput: {
    backgroundColor: "#f0bebe",
    backgroundColor: "#f0bebe",
    width: "60%",
    height: 50,
    borderRadius: 50,
    textAlign: "center",
  },
  submitButton: {
    backgroundColor: "#ffffff",
    padding: 12,
    borderRadius: 50,
  },
  submitText: {
    fontSize: 20,
    color: "#f0bebe",
  },
});

export default InputScreen;
