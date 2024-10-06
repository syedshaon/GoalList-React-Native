import { View, Text, StyleSheet, Pressable } from "react-native";

function GoalItem({ goalItem, setListOfGoals }) {
  const handlePress = (index) => {
    setListOfGoals((prevGoals) => {
      return prevGoals.filter((goal, goalIndex) => {
        return goalIndex !== index;
      });
    });
  };
  return (
    <View style={styles.listItemsParent}>
      <View key={goalItem.index} style={styles.listItemStyle}>
        <Text style={styles.listItemSingle}>{goalItem.index + 1} : </Text>
        <Text style={styles.listItemSingle}>{goalItem.item}</Text>
      </View>
      {/* <Pressable  android_riple={{ color: "black" }} style={styles.listItemDelete } onPress={() => handlePress(goalItem.index)}> */}
      <View style={styles.listItemDelete}>
        <Pressable style={({ pressed }) => pressed && styles.pressedItem} onPress={() => handlePress(goalItem.index)}>
          <Text style={styles.listItemDeleteIcon}>X</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  listItemsParent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    // marginVertical: 5,
    columnGap: 10,
  },
  listItemStyle: {
    flex: 7,
    flexDirection: "row",
    justifyContent: "flex-start",
    rowGap: 10,
    alignItems: "center",
    padding: 10,

    backgroundColor: "#2196a3",
    borderColor: "#2196a3",
    borderWidth: 1,
    borderRadius: 5,
  },
  listItemSingle: {
    color: "white",
  },
  listItemDelete: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pressedItem: {
    opacity: 0.5,
  },
  listItemDeleteIcon: {
    color: "white",
    fontWeight: "bold",
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#2196a3",
    borderColor: "#2196a3",
    borderWidth: 1,
    borderRadius: 5,
  },
});
