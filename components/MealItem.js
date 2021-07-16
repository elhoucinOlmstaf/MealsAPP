import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

const MealItem = (props) => {
  let NativeTouch = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    NativeTouch = TouchableNativeFeedback;
  }

  return (
    <NativeTouch onPress={() => props.SelectedMeals()}>
      <View style={styles.MealItem}>
        <View style={{ ...styles.MealRow, ...styles.mealHeader }}>
          <ImageBackground
            source={{ uri: props.Duration }}
            style={styles.bgImage}
          >
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{props.Title}</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{ ...styles.MealRow, ...styles.mealDetail }}>
          <Text style={styles.title_Details}>{props.complexity}m</Text>
          <Text style={styles.title_Details}>{props.steps.toUpperCase()}</Text>
          <Text style={styles.title_Details}>
            {props.ImageUrl.toUpperCase()}
          </Text>
        </View>
      </View>
    </NativeTouch>
  );
};

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

export default MealItem;
