import { FlatList, Text, View, StyleSheet, Image } from "react-native";
import GoalItem from "./GoalItem";

function GoalList({ listOfGoals, setListOfGoals }) {
  const imgSrc = require("../assets/goal.png");

  return (
    <View style={styles.listContainer}>
      <Image source={imgSrc} style={{ width: 100, height: 100, alignSelf: "center" }} />

      {listOfGoals.length > 0 ? <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 20, marginBottom: 10 }}>List of Goals</Text> : <Text style={{ textAlign: "center", fontSize: 20 }}>No goals yet!</Text>}

      <View>
        <FlatList
          data={listOfGoals}
          renderItem={(goalItem) => {
            return <GoalItem goalItem={goalItem} setListOfGoals={setListOfGoals} />;
          }}
        />
      </View>
    </View>
  );
}

export default GoalList;

const styles = StyleSheet.create({
  listContainer: {
    flex: 5,
  },
});
