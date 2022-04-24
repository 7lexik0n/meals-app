import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Platform,
  TouchableNativeFeedback,
  TouchableHighlight,
} from "react-native";

const CategoryGridTile = ({ title, color, onSelect }) => {
  const TileContent = (
    <View style={{ ...styles.container, backgroundColor: color }}>
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
    </View>
  );

  if (Platform.OS === "android") {
    const TouchableComponent =
      Platform.Version >= 21 ? TouchableNativeFeedback : TouchableHighlight;

    return (
      <View style={{ ...styles.gridItem, ...styles.containerAndroid }}>
        <TouchableComponent style={styles.touchableAndroid} onPress={onSelect}>
          {TileContent}
        </TouchableComponent>
      </View>
    );
  }

  return (
    <TouchableOpacity style={styles.gridItem} onPress={onSelect}>
      {TileContent}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    elevation: 5,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    padding: 10,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    textAlign: "right",
  },
  containerAndroid: {
    overflow: "hidden",
    borderRadius: 10,
  },
  touchableAndroid: {
    flex: 1,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
  },
});

export default CategoryGridTile;
