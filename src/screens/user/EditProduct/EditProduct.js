import React, { useEffect, useCallback } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch } from "react-redux";

import useInputState from "../../../hooks/useInputState";
import inputValidator from "../../../helpers/inputValidator";

import { InputContainer, Label, Input } from "./styles";
import CustomHeaderButton from "../../../components/general/HeaderButton";
import InputValidation from "../../../components/general/InputValidation/InputValidation";

import * as ProductsActions from "../../../store/actions/products";

const EditProduct = ({ navigation }) => {
  const { id, title, description, imageUrl } = navigation.getParam(
    "productData"
  );

  const [editTitle, changeTitle] = useInputState(title);
  const [editDescription, changeDescription] = useInputState(description);
  const [editImageUrl, changeImageUrl] = useInputState(imageUrl);

  const titleValidation = inputValidator(editTitle, true, 10, 20);
  const descriptionValidation = inputValidator(editDescription, true, 20, 100);
  const imageValidation = inputValidator(editImageUrl, true, null, null);

  const dispatch = useDispatch();

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
        <InputContainer>
          <Label>Title</Label>
          <Input
            placeholder="Title..."
            autoCapitalize="words"
            value={editTitle}
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
            value={editDescription}
            onChangeText={changeDescription}
          />
          <InputValidation validation={descriptionValidation} />
        </InputContainer>
        <InputContainer>
          <Label>Image</Label>
          <Input
            placeholder="Image..."
            value={editImageUrl}
            onChangeText={changeImageUrl}
          />
          <InputValidation validation={imageValidation} />
        </InputContainer>
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
  }
});

export default EditProduct;
