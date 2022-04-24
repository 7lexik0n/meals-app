import React from "react";
import { View, StyleSheet, Platform, Switch } from "react-native";
import Colors from "../constants/Colors";
import DefaultText from "./DefaultText";

const FilterSwitch = ({ label, value, onChange }) => {
  return (
    <View style={styles.filterContainer}>
      <DefaultText>{label}</DefaultText>
      <Switch
        trackColor={{ true: Colors.primary, false: "#ccc" }}
        thumbColor={Platform.OS === "android" ? Colors.accent : ""}
        value={value}
        onValueChange={onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 10,
  },
});

export default FilterSwitch;
