import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealItem from "./MealItem";

const MealList = (props) => {
  const navigation = useNavigation();
  const RenderMealData = (ItemData) => {
    return (
      <MealItem
        title={ItemData.item.Title}
        Duration={ItemData.item.Duration}
        complexity={ItemData.item.complexity}
        steps={ItemData.item.steps}
        ImageUrl={ItemData.item.ImageUrl}
        SelectedMeals={() => {
          navigation.navigate("MdetailScreen", {
            itemid: ItemData.item.id,
            title: ItemData.item.Title,
          });
        }}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={props.listData}
        renderItem={RenderMealData}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});

export default MealList;
