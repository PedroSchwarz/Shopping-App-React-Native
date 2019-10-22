import React, { useEffect, useCallback } from "react";
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
  Alert
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch } from "react-redux";

import useInputState from "../../../hooks/useInputState";
import inputValidator from "../../../helpers/inputValidator";

import CustomHeaderButton from "../../../components/general/HeaderButton";
import CustomInput from "../../../components/general/CustomInput/CustomInput";

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
    if (
      !titleValidation.valid ||
      !descriptionValidation.valid ||
      !imageValidation.valid
    ) {
      Alert.alert("Something is Off!", "Check the fields before submitting.", [
        { text: "OK" }
      ]);
    } else {
      dispatch(
        ProductsActions.updateProduct(
          id,
          editTitle,
          editDescription,
          editImageUrl
        )
      );
      navigation.pop();
    }
  }, [editTitle, editDescription, editImageUrl]);

  useEffect(() => {
    navigation.setParams({ submit: handleSubmit });
  }, [handleSubmit]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={100}
    >
      <ScrollView>
        <View style={styles.container}>
          <CustomInput
            label="Title"
            placeholder="Title..."
            autoCapitalize="words"
            value={editTitle}
            onChangeText={changeTitle}
            validation={titleValidation}
          />
          <CustomInput
            label="Description"
            placeholder="Description..."
            autoCapitalize="sentences"
            multiline
            numberOfLines={4}
            value={editDescription}
            onChangeText={changeDescription}
            validation={descriptionValidation}
          />
          <CustomInput
            label="Image URL"
            placeholder="Image..."
            value={editImageUrl}
            onChangeText={changeImageUrl}
            validation={imageValidation}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
