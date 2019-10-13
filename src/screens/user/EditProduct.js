import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EditProduct = () => {
  return (
    <View style={styles.container}>
      <Text>Edit Product Page</Text>
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

export default EditProduct;
