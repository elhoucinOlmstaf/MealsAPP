import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {MEALS} from '../data/dummy-data'

export default function MdetailScreen({route}) {
  // console.warn(r);
  console.log(route.params.itemid);
  const SelectedMeal =  MEALS.find( meal => meal.id === route.params.itemid)
  console.log(SelectedMeal);
  return (
    <View>
      <Text>{SelectedMeal.Title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
