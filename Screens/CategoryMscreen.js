import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";

export default function CategoryMscreen({ route }) {
  const Catid = route.params.catID;
  // const selecteddata = CATEGORIES.find((cat) => cat.id === Catid);
  // flilter Meals according to its category id
  const FilteredData = MEALS.filter(
    (meal) => meal.CategoryId.indexOf(Catid) >= 0
  );

 let newData   = MEALS.filter((meal)=>meal.CategoryId.includes(Catid))
  console.log(newData);
  return (
    <View>
      <Text>Meal Title : </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
