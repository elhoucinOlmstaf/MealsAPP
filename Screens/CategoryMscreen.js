import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MyCategories } from "../data/daumy-data";

export default function CategoryMscreen({ route }) {
  const Catid = route.params.catID;
  const selecteddata = MyCategories.find((cat) => cat.id === Catid);
  return (
    <View>
      <Text>Meal Title : {selecteddata.title} </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
