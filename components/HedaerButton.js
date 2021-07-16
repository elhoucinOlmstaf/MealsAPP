import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { HeaderButton } from "react-navigation-header-buttons";
import { useNavigation } from "@react-navigation/native";

const CustomHeaderButton = (props) => {
  const { dangerouslyGetState } = useNavigation();
  const { index, routes } = dangerouslyGetState();
  let color = "";
  // checking current screen
  if (
    routes[index].name === "CategoryScreen" ||
    routes[index].name === "MdetailScreen"
  ) {
    color = "black";
  } else {
    color = "#fff";
  }

  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={27}
      color={color}
    />
  );
};

export default CustomHeaderButton;
