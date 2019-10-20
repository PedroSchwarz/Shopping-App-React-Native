import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { View, TextInput, ScrollView, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import useInputState from "../../hooks/useInputState";
import * as ProductsActions from "../../store/actions/products";

import CustomHeaderButton from "../../components/general/HeaderButton";

import Colors from "../../constants/Colors";

const NewProduct = ({ navigation }) => {
  const [title, changeTitle] = useInputState("");
  const [description, changeDescription] = useInputState("");
  const [price, changePrice] = useInputState("");
  const [imageUrl, changeImageUrl] = useInputState("");

  const dispatch = useDispatch();

  const handleSubmit = useCallback(() => {
    dispatch(
      ProductsActions.createProduct(title, description, imageUrl, price)
    );
    navigation.pop();
  }, [title, description, price, imageUrl]);

  useEffect(() => {
    navigation.setParams({ submit: handleSubmit });
  }, [handleSubmit]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Title..."
            autoCapitalize="words"
            value={title}
            onChangeText={changeTitle}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Description..."
            autoCapitalize="sentences"
            multiline
            numberOfLines={4}
            value={description}
            onChangeText={changeDescription}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Price..."
            keyboardType="number-pad"
            value={price}
            onChangeText={changePrice}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Image..."
            value={imageUrl}
            onChangeText={changeImageUrl}
          />
        </View>
      </View>
    </ScrollView>
  );
};

NewProduct.navigationOptions = ({ navigation }) => {
  const submit = navigation.getParam("submit");

  return {
    title: "Create Product",
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Save" iconName="check" onPress={submit} />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inputContainer: {
    marginHorizontal: 16,
    marginVertical: 8
  },
  input: {
    fontSize: 18,
    fontFamily: "raleway-regular",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomColor: Colors.accent,
    borderBottomWidth: 1
  }
});

export default NewProduct;
