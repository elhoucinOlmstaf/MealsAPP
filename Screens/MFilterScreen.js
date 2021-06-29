import React, { useState } from "react";
import { View, Switch, StyleSheet, Text } from "react-native";

const MFilterScreen = () => {
  const [isOption1, setIsOption1] = useState(false);
  const [isOption2, setIsOption2] = useState(false);
  const [isOption3, setIsOption3] = useState(false);
  const [isOption4, setIsOption4] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>available Options</Text>
      <View style={styles.filterContainer}>
        <Text style={styles.switchTitle}>Option 1</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isOption1 ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={(newValue) => setIsOption1(newValue)}
          value={isOption1}
        />
      </View>
      <View style={styles.filterContainer}>
        <Text style={styles.switchTitle}>Option 2</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isOption2 ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={(newValue) => setIsOption2(newValue)}
          value={isOption2}
        />
      </View>
      <View style={styles.filterContainer}>
        <Text style={styles.switchTitle}>Option 3</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isOption3 ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={(newValue) => setIsOption3(newValue)}
          value={isOption3}
        />
      </View>
      <View style={styles.filterContainer}>
        <Text style={styles.switchTitle}>Option 4</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isOption4 ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={(newValue) => setIsOption4(newValue)}
          value={isOption4}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    margin: 20,
    fontSize: 20,
  },
  switchTitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "tomato",
    fontStyle:"italic"
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    margin: 10,
  },
});

export default MFilterScreen;
