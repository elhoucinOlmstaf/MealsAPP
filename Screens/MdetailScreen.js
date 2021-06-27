import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";

export default function MdetailScreen({ route }) {
  // console.warn(r);
  const SelectedMeal = MEALS.find((meal) => meal.id === route.params.itemid);
  return (
    <View style={styles.container}>
      <Text>{SelectedMeal.Title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
