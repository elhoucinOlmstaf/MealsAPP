import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useFonts } from "expo-font";
import { useSelector, useDispatch } from "react-redux";
import { ToggleFavorite } from "../Redux/Actions/MealsActions";

const MdetailScreen = ({ route, navigation }) => {
  const NewMeals = useSelector((state) => state.meals.meals);
  const SelectedMeal = NewMeals.find((meal) => meal.id === route.params.itemid);

  const dispatch = useDispatch();
  const ToggleHandler = useCallback(() => {
    dispatch(ToggleFavorite(SelectedMeal.id));
  }, [dispatch, SelectedMeal.id]);

  useEffect(() => {
    navigation.setParams({ ToggleFav: ToggleHandler });
  }, [ToggleHandler]);

  let [fontsLoaded] = useFonts({
    "Inter-SemiBoldItalic":
      "https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12",
  });
  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#00ff00" />;
  } else {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={{ uri: SelectedMeal.Duration }}
            style={{ width: "100%", height: 200 }}
            onError={(error) => console.warn(error)}
          />
          <View style={styles.details}>
            <Text onPress={() => ToggleHandler()} style={styles.title_Details}>
              {SelectedMeal.complexity}m
            </Text>
            <Text style={styles.title_Details}>
              {SelectedMeal.steps.toUpperCase()}
            </Text>

            <Text style={styles.title_Details}>
              {SelectedMeal.ImageUrl.toUpperCase()}
            </Text>
          </View>
          <View style={styles.Ingredient}>
            <Text style={styles.Title}>Ingredient</Text>
            {SelectedMeal.affordablity.map((affordablity1) => (
              <Text
                key={affordablity1}
                style={{
                  borderColor: "black",
                  borderWidth: 1.5,
                  margin: 8,
                  padding: 10,
                  fontSize: 19,
                  fontFamily: "Inter-SemiBoldItalic",
                }}
              >
                {affordablity1}
              </Text>
            ))}
          </View>
          <View style={styles.Ingredient}>
            <Text style={{ ...styles.Title, ...{ letterSpacing: 0 } }}>
              List Of Steps
            </Text>
            {SelectedMeal.isVegan.map((isVegan1) => (
              <Text
                key={isVegan1}
                style={{
                  borderColor: "black",
                  borderWidth: 1.5,
                  margin: 8,
                  padding: 10,
                  fontSize: 19,
                  fontFamily: "Inter-SemiBoldItalic",
                }}
              >
                {isVegan1}
              </Text>
            ))}
          </View>
        </View>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    height: 45,
    alignItems: "center",
    backgroundColor: "#ecf3f9",
  },
  title_Details: {
    fontSize: 19,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  Title: {
    fontSize: 30,
    fontWeight: "bold",
    letterSpacing: 3,
    marginBottom: 10,
    textAlign: "center",
  },
  Ingredient: {
    marginTop: 15,
    marginBottom: 15,
  },
});

export default MdetailScreen;
