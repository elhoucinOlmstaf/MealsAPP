import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Meal from '../data/dummy-data'

export default function MdetailScreen({route}) {
  // console.warn(r);
  console.log(route.params.itemid);
  return (
    <View>
      <Text>hhh</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
