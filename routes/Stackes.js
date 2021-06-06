import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import screens
import CategoryMscreen from "../Screens/CategoryMscreen";
import CategoryScreen from "../Screens/CategoryScreen";
import FavoriteScreen from "../Screens/FavoriteScreen";
import MdetailScreen from "../Screens/MdetailScreen";
import MFilterScreen from "../Screens/MFilterScreen";

const Stack = createStackNavigator();

const StackApp = () => {
  return (
    <NavigationContainer>
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
        <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} />
        <Stack.Screen name="MdetailScreen" component={MdetailScreen} />
        <Stack.Screen name="MFilterScreen" component={MFilterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackApp;
