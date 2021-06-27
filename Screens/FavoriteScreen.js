import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Header } from "react-native-elements";
import {MyCustomLeftComponent , MyCustomCenterComponent} from "../components/CustomHeaderComponent";
export default function FavoriteScreen({navigation}) {

  return (
    <Header>
      <MyCustomLeftComponent />
      <MyCustomCenterComponent/>
    </Header>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
});
