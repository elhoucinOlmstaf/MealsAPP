import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

// import screens
import CategoryMscreen from "../Screens/CategoryMscreen";
import CategoryScreen from "../Screens/CategoryScreen";
import FavoriteScreen from "../Screens/FavoriteScreen";
import MdetailScreen from "../Screens/MdetailScreen";
import MFilterScreen from "../Screens/MFilterScreen";
import CustomHeaderButton from "../components/HedaerButton";

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();
const StackApp = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="CategoryScreen">
      <Stack.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={{
          title: "Meal Category ",
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="Favorites"
                iconName="ios-menu"
                onPress={() => {
                  navigation.toggleDrawer();
                }}
              />
            </HeaderButtons>
          ),
        }}
      />
      <Stack.Screen
        name="CategoryMscreen"
        component={CategoryMscreen}
        options={({ route }) => ({ title: route.params.data.title })}
      />
      <Stack.Screen
        name="MdetailScreen"
        component={MdetailScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item title="Favorites" iconName="ios-star" />
            </HeaderButtons>
          ),
        })}
      />
      <Stack.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={{
          title: "Meal Category ",
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item title="Favorites" iconName="ios-star" />
            </HeaderButtons>
          ),
        }}
      />
      <Stack.Screen name="MFilterScreen" component={MFilterScreen} />
    </Stack.Navigator>
  );
};

function MyTabs() {
  let ActiveColor = "white";
  let UnActiveColor = "black";
  return (
    <Tab.Navigator
      initialRouteName="StackApp"
      activeColor="#f0edf6"
      shifting={true}
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "blue" }}
    >
      <Tab.Screen
        name="StackApp"
        component={StackApp}
        options={{
          tabBarLabel: (
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>Meals</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="restaurant"
              color={focused ? ActiveColor : UnActiveColor}
              size={18}
            />
          ),
        }}
      />
      <Tab.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={{
          tabBarLabel: (
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>Favorite</Text>
          ),
          tabBarColor: "red",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="star"
              color={focused ? ActiveColor : UnActiveColor}
              size={18}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function DrawerScreen() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="StackApp">
        <Drawer.Screen name="MyTabs" component={MyTabs} />
        <Drawer.Screen name="MFilterScreen" component={MFilterScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerScreen;
