import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Card = () => {
  return (
    <View style={styles.container}>
      <Text>Card Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Card;
