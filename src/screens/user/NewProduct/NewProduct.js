import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { View, ScrollView, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import inputValidator from "../../../helpers/inputValidator";

import { InputContainer, Label, Input } from "./styles";
import CustomHeaderButton from "../../../components/general/HeaderButton";
import InputValidation from "../../../components/general/InputValidation/InputValidation";

import useInputState from "../../../hooks/useInputState";
import * as ProductsActions from "../../../store/actions/products";

const NewProduct = ({ navigation }) => {
  const [title, changeTitle] = useInputState("");
  const [description, changeDescription] = useInputState("");
  const [price, changePrice] = useInputState("");
  const [imageUrl, changeImageUrl] = useInputState("");

  const titleValidation = inputValidator(title, true, 10, 20);
  const descriptionValidation = inputValidator(description, true, 20, 100);
  const priceValidation = inputValidator(price, true, null, null);
  const imageValidation = inputValidator(imageUrl, true, null, null);

  const dispatch = useDispatch();

  const handleSubmit = useCallback(() => {
    if (
      !titleValidation.valid ||
      !descriptionValidation.valid ||
      !priceValidation.valid ||
      !imageValidation.valid
    )
      return;
    else {
      dispatch(
        ProductsActions.createProduct(title, description, imageUrl, price)
      );
      navigation.pop();
    }
  }, [title, description, price, imageUrl]);

  useEffect(() => {
    navigation.setParams({ submit: handleSubmit });
  }, [handleSubmit]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <InputContainer>
          <Label>Title</Label>
          <Input
            placeholder="Title..."
            autoCapitalize="words"
            value={title}
            onChangeText={changeTitle}
          />
          <InputValidation validation={titleValidation} />
        </InputContainer>
        <InputContainer>
          <Label>Description</Label>
          <Input
            placeholder="Description..."
            autoCapitalize="sentences"
            multiline
            numberOfLines={4}
            value={description}
            onChangeText={changeDescription}
          />
          <InputValidation validation={descriptionValidation} />
        </InputContainer>
        <InputContainer>
          <Label>Price</Label>
          <Input
            placeholder="Price..."
            keyboardType="number-pad"
            value={price}
            onChangeText={changePrice}
          />
          <InputValidation validation={priceValidation} />
        </InputContainer>
        <InputContainer>
          <Label>Image URL</Label>
          <Input
            placeholder="Image..."
            value={imageUrl}
            onChangeText={changeImageUrl}
          />
          <InputValidation validation={imageValidation} />
        </InputContainer>
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
  }
});

export default NewProduct;
