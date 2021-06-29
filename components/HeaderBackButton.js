import React from "react";
import { TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const HeaderBackButton = (props) => {
  return (
    <View>
      <TouchableOpacity onPress={props.onGobakc}>
        <Icon name="arrow-back" size={25} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderBackButton;
