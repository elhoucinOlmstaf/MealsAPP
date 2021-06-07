import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";

export default function CategoryScreen({ navigation }) {
  let NativeTouch = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    NativeTouch = TouchableNativeFeedback;
  }
  // itemView
  const itemView = (itemData) => {
    return (
      <View style={styles.list}>
        <NativeTouch
          style={{ flex: 1 }}
          onPress={() =>
            navigation.navigate("CategoryMscreen", {
              catID: itemData.item.id,
              data: itemData.item,
            })
          }
        >
          <View
            style={{
              ...styles.Categories,
              ...{ backgroundColor: itemData.item.color },
            }}
          >
            <Text style={styles.text}>{itemData.item.title}</Text>
          </View>
        </NativeTouch>
      </View>
    );
  };
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={itemView}
      keyExtractor={(item, index) => item.id}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    margin: 12,
    height: 100,
    overflow: "hidden",
    borderRadius: 10,
  },
  Categories: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 17,
    textAlign: "center",
  },
});
