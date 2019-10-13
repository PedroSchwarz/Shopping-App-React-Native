import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Orders = () => {
  return (
    <View style={styles.container}>
      <Text>Orders Page</Text>
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

export default Orders;
