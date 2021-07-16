import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Header } from "react-native-elements";
import { useSelector } from "react-redux";
import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";
import {
  MyCustomLeftComponent,
  MyCustomCenterComponent,
} from "../components/CustomHeaderComponent";
export default function FavoriteScreen() {
  const NewMeals = useSelector((state) => state.meals.FavoriteMeals);
  // const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
  console.log(NewMeals);
  return <MealList listData={NewMeals} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
});
