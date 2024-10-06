import { View, Button, TextInput, StyleSheet, Image } from "react-native";
import { useState } from "react";

function GoalInput({ setListOfGoals, setModalVisible }) {
  const [inputValue, setInputValue] = useState("");

  const inputChangeHandler = (text) => {
    setInputValue(text);
  };

  const addGoalHandler = () => {
    // setListOfGoals([...listOfGoals, inputValue]);
    //
    if (inputValue.trim().length === 0) {
      return;
    }
    setListOfGoals((prevGoals) => [...prevGoals, inputValue]);
    setInputValue("");
    setModalVisible(false);
  };

  const cancelAddHandler = () => {
    setModalVisible(false);
  };
  const imgSrc = require("../assets/goal.png");

  return (
    <View style={styles.addGoalContainer}>
      <Image source={imgSrc} style={{ width: 100, height: 100, alignSelf: "center", marginBottom: 20 }} />
      <View style={styles.inputElementContainer}>
        <TextInput value={inputValue} onChangeText={inputChangeHandler} style={styles.inputElement} placeholder="Your course goal!!" />
        <View style={styles.buttonElement}>
          <Button color="#2196f3" title="Add Goal" onPress={addGoalHandler} />
          <Button color="#2196f3" title="Cancel" onPress={cancelAddHandler} />
        </View>
      </View>
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  addGoalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f5d3c9",
    padding: 15,
  },
  inputElementContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContentc: "center",
    gap: 10,
  },
  inputElement: {
    width: "80%",
    borderColor: "#2196a3",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  buttonElement: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
    gap: 10,
  },
});
