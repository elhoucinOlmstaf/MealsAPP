import React, { useState } from "react";
import * as Font from "expo-font";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  TouchableNativeFeedback,
  Platform,
  ActivityIndicator,
} from "react-native";
import AppLoading from "expo-app-loading";
import { CATEGORIES, MEALS } from "../data/dummy-data";

export default function CategoryMscreen({ route, navigation }) {
  // getting the id . then filtering the data based on the id
  const Catid = route.params.catID;
  let newMealsData = MEALS.filter((meal) => meal.CategoryId.includes(Catid));

  // if android replace TouchacleOpacity with NativeTouch
  let NativeTouch = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    NativeTouch = TouchableNativeFeedback;
  }

  const RenderData = (ItemData) => {
    return (
      <NativeTouch
        onPress={() =>
          navigation.navigate("MdetailScreen", { itemid: ItemData.item.id })
        }
      >
        <View style={styles.MealItem}>
          <View style={{ ...styles.MealRow, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: ItemData.item.Duration }}
              style={styles.bgImage}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{ItemData.item.Title}</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.MealRow, ...styles.mealDetail }}>
            <Text style={styles.title_Details}>
              {ItemData.item.complexity}m
            </Text>
            <Text style={styles.title_Details}>
              {ItemData.item.steps.toUpperCase()}
            </Text>
            <Text style={styles.title_Details}>
              {ItemData.item.ImageUrl.toUpperCase()}
            </Text>
          </View>
        </View>
      </NativeTouch>
    );
  };
  //load fonts
  const FetchFonts = () => {
    return Font.loadAsync({
      "OpenSans-Bold": require("../assets/fonts/OpenSans-Bold.ttf"),
      "OpenSans-Regular": require("../assets/fonts/OpenSans-Regular.ttf"),
    });
  };
  const [fontloaded, setfontloaded] = useState(false);
  if (!fontloaded) {
    return (
      <AppLoading
        startAsync={FetchFonts}
        onFinish={() => setfontloaded(true)}
        onError={console.warn}
      />
    );
  }
  return (
    <View>
      <FlatList
        style={{ width: "100%" }}
        data={newMealsData}
        keyExtractor={(item) => item.id}
        renderItem={RenderData}
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
    backgroundColor: "#fff",
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
    fontFamily: "OpenSans-Regular",
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
    fontFamily: "OpenSans-Bold",
  },
});

/**
 * ! const selecteddata = CATEGORIES.find((cat) => cat.id === Catid);
 * // flilter Meals according to its category id`
 * !const FilteredData = MEALS.filter( (meal) => meal.CategoryId.indexOf(Catid) >= 0);
 * TODO: style the item_List
 * TODO: upload the rest of data
 */
