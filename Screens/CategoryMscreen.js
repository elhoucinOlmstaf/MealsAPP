import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";

export default function CategoryMscreen({ route }) {
  const Catid = route.params.catID;
  let NativeTouch = TouchableOpacity;
  let newMealsData = MEALS.filter((meal) => meal.CategoryId.includes(Catid));
  const image = { uri: "https://reactjs.org/logo-og.png" };
  // if android replace TouchacleOpacity with NativeTouch
  if (Platform.OS === "android" && Platform.Version >= 21) {
    NativeTouch = TouchableNativeFeedback;
  }
  return (
    <View>
      <FlatList
        style={{ width: "100%" }}
        data={newMealsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          console.log(item.Duration);
          return (
            <NativeTouch onPress={() => alert("mann!!")}>
              <View style={styles.MealItem}>
                <View style={{ ...styles.MealRow, ...styles.mealHeader }}>
                  <ImageBackground
                    source={{ uri: item.Duration }}
                    style={styles.bgImage}
                  >
                    <View style={styles.titleContainer}>
                      <Text style={styles.title}>{item.Title}</Text>
                    </View>
                  </ImageBackground>
                </View>
                <View style={{ ...styles.MealRow, ...styles.mealDetail }}>
                  <Text style={styles.title_Details}>{item.complexity}m</Text>
                  <Text style={styles.title_Details}>
                    {item.steps.toUpperCase()}
                  </Text>
                  <Text style={styles.title_Details}>
                    {item.ImageUrl.toUpperCase()}
                  </Text>
                </View>
              </View>
            </NativeTouch>
          );
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  MealItem: {
    width: "100%",
    height: 230,
    backgroundColor: "tomato",
  },
  MealRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "85%",
    backgroundColor: "red",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    // fontFamily: 'open-sans-bold',
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
  },
  title_Details: {
    fontWeight: "bold",
    fontStyle: "italic",
  },
});

/**
 * ! const selecteddata = CATEGORIES.find((cat) => cat.id === Catid);
 * // flilter Meals according to its category id`
 * !const FilteredData = MEALS.filter( (meal) => meal.CategoryId.indexOf(Catid) >= 0);
 * TODO: style the item_List
 * TODO: upload the rest of data
 */
