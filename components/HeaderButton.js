import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Platform } from "react-native";
import Colors from "../constants/Colors";

const HeaderButton = ({ name, size, onSelect, style }) => {
  return (
    <View style={{ ...style }}>
      <TouchableOpacity activeOpacity={0.8} onPress={onSelect}>
        <Ionicons
          name={name}
          size={size}
          color={Platform.OS === "android" ? "#fff" : Colors.primary}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HeaderButton;
