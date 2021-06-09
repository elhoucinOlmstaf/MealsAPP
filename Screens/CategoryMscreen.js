import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";

export default function CategoryMscreen({ route }) {
  const Catid = route.params.catID;
  /**
   * ! const selecteddata = CATEGORIES.find((cat) => cat.id === Catid);
   * // flilter Meals according to its category id`
   * !const FilteredData = MEALS.filter( (meal) => meal.CategoryId.indexOf(Catid) >= 0);
   * TODO: style the item_List
   * TODO: upload the rest of data
   */
  let newMealsData = MEALS.filter((meal) => meal.CategoryId.includes(Catid));

  return (
    <View>
      <FlatList
        style={{ width: "100%" }}
        data={newMealsData}
        renderItem={({ item }) => {
          return (
            <View style={styles.MealItem}>
              <View style={styles.MealRow}>
                <ImageBackground source={{ uri: item.url }}>
                  <View style={styles.titleContainer}>
                    <Text style={styles.title} numberOfLines={1}>
                      hhh
                    </Text>
                  </View>
                </ImageBackground>
              </View>
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  MealItem: {
    width: "100%",
    height: 230,
    backgroundColor: "tomato",
  },
  MealRow: {
    flexDirection: "row",
  },
});

/**
 * TODO:Adding Meal Models & Data Loading Meals for Categories Rendering a Meals List
 */
