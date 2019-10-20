import React, { useEffect, useCallback } from "react";
import { View, TextInput, ScrollView, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch } from "react-redux";

import useInputState from "../../hooks/useInputState";

import CustomHeaderButton from "../../components/general/HeaderButton";

import Colors from "../../constants/Colors";
import * as ProductsActions from "../../store/actions/products";

const EditProduct = ({ navigation }) => {
  const { id, title, description, imageUrl } = navigation.getParam(
    "productData"
  );

  const dispatch = useDispatch();

  const [editTitle, changeTitle] = useInputState(title);
  const [editDescription, changeDescription] = useInputState(description);
  const [editImageUrl, changeImageUrl] = useInputState(imageUrl);

  const handleSubmit = useCallback(() => {
    dispatch(
      ProductsActions.updateProduct(
        id,
        editTitle,
        editDescription,
        editImageUrl
      )
    );
    navigation.pop();
  }, [editTitle, editDescription, editImageUrl]);

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
            value={editTitle}
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
            value={editDescription}
            onChangeText={changeDescription}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Image..."
            value={editImageUrl}
            onChangeText={changeImageUrl}
          />
        </View>
      </View>
    </ScrollView>
  );
};

EditProduct.navigationOptions = ({ navigation }) => {
  const { title } = navigation.getParam("productData");
  const submit = navigation.getParam("submit");
  return {
    title: `Edit ${title} product`,
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

export default EditProduct;
