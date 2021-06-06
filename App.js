import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import StackApp from "./routes/Stackes";


//load fonts
const FetchFonts = () => {
  return Font.loadAsync({
    "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
  });
};

function App() {
  const [fontloaded, setfontloaded] = useState(false);
  if (!fontloaded) {
    return (
      <AppLoading
        startAsync={FetchFonts}
        onFinish={() => setfontloaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "OpenSans-Bold" }}>
        Open up App.js to start working on your app!
      </Text>
    </View>
  );
}

export default function hei() {
  return <StackApp />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
