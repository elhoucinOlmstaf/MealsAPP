import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { MyCategories } from "../data/daumy-data";

export default function CategoryScreen({ navigation }) {
  // itemView
  const itemView = (itemData) => {
    console.log(itemData);
    return (
      <TouchableOpacity
        style={styles.list}
        onPress={() =>
          navigation.navigate("CategoryMscreen", { catID: itemData.item.id , data:itemData.item })
        }
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      data={MyCategories}
      renderItem={itemView}
      keyExtractor={(item, index) => item.id}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    padding: 15,
    height: 100,
  },
});
