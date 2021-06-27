import React from "react";
import { View } from "react-native";
import { Title } from "react-native-paper";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "./HedaerButton";
import { useNavigation } from "@react-navigation/native";
const MyCustomLeftComponent = () => {
  const navigation = useNavigation();
  return (
    <View>
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorites"
          iconName="ios-menu"
          onPress={() => navigation.toggleDrawer()}
        />
      </HeaderButtons>
    </View>
  );
};

const MyCustomCenterComponent = () => {
  return (
    <View>
      <Title style={{ color: "#fff" }}>My Favorites</Title>
    </View>
  );
};
export { MyCustomCenterComponent, MyCustomLeftComponent };
