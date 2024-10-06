import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, Button, Modal } from "react-native";
import { useState } from "react";
import GoalList from "./components/GoalList";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [listOfGoals, setListOfGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Modal visible={modalVisible} animationType="slide">
          <GoalInput setListOfGoals={setListOfGoals} setModalVisible={setModalVisible} />
        </Modal>

        <GoalList listOfGoals={listOfGoals} setListOfGoals={setListOfGoals} />
        <Button color="#2196f3" title="Add New Goal" onPress={() => setModalVisible(true)} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
    flex: 1,
    backgroundColor: "#f5e2dc",
  },
});
