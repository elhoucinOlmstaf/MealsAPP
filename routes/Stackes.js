import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

// import screens
import CategoryMscreen from "../Screens/CategoryMscreen";
import CategoryScreen from "../Screens/CategoryScreen";
import FavoriteScreen from "../Screens/FavoriteScreen";
import MdetailScreen from "../Screens/MdetailScreen";
import MFilterScreen from "../Screens/MFilterScreen";
import CustomHeaderButton from "../components/HedaerButton";

const Stack = createStackNavigator();
const tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();
const StackApp = () => {
  return (
    <Stack.Navigator initialRouteName="CategoryScreen">
      <Stack.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={{ title: "Meal Category " }}
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

      />
      <Stack.Screen name="MFilterScreen" component={MFilterScreen} />
    </Stack.Navigator>
  );
};

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="StackApp"
        activeColor="#f0edf6"
        shifting={true}
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: "#ccc" }}
      >
        <Tab.Screen
          name="StackApp"
          component={StackApp}
          options={{
            tabBarLabel: "Meals",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="restaurant" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={FavoriteScreen}
          options={{
            tabBarLabel: "Favorites",
            tabBarColor: "red" ,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="star" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;
