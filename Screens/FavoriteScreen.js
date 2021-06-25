import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Header } from "react-native-elements";


export default function FavoriteScreen() {
  return (
    <Header
      barStyle="dark-content"
      centerComponent={{
        text: "My favorites",
        style: { color: "#fff", paddingTop: 15, fontSize: 18 },
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
});
