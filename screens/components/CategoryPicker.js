import { Pressable, StyleSheet, Text, View } from "react-native";

export const categories = [
  {
    id: "0",
    name: "food",
    color: "#ff9900",
  },
  {
    id: "1",
    name: "Transport",
    color: "#6eadff",
  },
  {
    id: "2",
    name: "Taxes",
    color: "#ff6464",
  },
  {
    id: "3",
    name: "Housing",
    color: "#21922b",
  },
  {
    id: "4",
    name: "Utilities",
    color: "#ff4bf0",
  },
  {
    id: "5",
    name: "Others",
    color: "#8f8f8f",
  },
];
function CategoryPicker({ currentCategory, setCurrentCategory }) {
  const content = categories.map((category) => {
    return (
      <Pressable
        key={category.id}
        style={
          currentCategory.id === category.id
            ? { ...styles.currentCategory, borderColor: category.color }
            : { ...styles.category, backgroundColor: category.color }
        }
        onPress={() => setCurrentCategory(category)}
      >
        <Text
          style={
            currentCategory.id === category.id
              ? styles.currentText
              : styles.text
          }
        >
          {category.name}
        </Text>
      </Pressable>
    );
  });
  return <View style={styles.container}>{content}</View>;
}

const styles = StyleSheet.create({
  category: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    paddingHorizontal: 12,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#ffffff00",
  },
  currentCategory: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    paddingHorizontal: 12,
    borderWidth: 2,
    borderRadius: 50,
    backgroundColor: "#ffffff",
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#f0bebe",
    width: "90%",
    padding: 20,
    borderRadius: 20,
  },
  text: {
    fontSize: 18,
    color: "#ffffff",
  },
  currentText: {
    fontSize: 18,
    color: "#000000",
  },
});

export default CategoryPicker;
