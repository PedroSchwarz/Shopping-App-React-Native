import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
  Alert
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import inputValidator from "../../../helpers/inputValidator";

import CustomHeaderButton from "../../../components/general/HeaderButton";
import CustomInput from "../../../components/general/CustomInput/CustomInput";

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
    ) {
      Alert.alert("Something is Off!", "Check the fields before submitting.", [
        { text: "OK" }
      ]);
    } else {
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
            value={title}
            onChangeText={changeTitle}
            validation={titleValidation}
          />
          <CustomInput
            label="Description"
            placeholder="Description..."
            autoCapitalize="sentences"
            multiline
            numberOfLines={4}
            value={description}
            onChangeText={changeDescription}
            validation={descriptionValidation}
          />
          <CustomInput
            label="Price"
            placeholder="Price..."
            keyboardType="number-pad"
            value={price}
            onChangeText={changePrice}
            validation={priceValidation}
          />
          <CustomInput
            label="Image URL"
            placeholder="Image..."
            value={imageUrl}
            onChangeText={changeImageUrl}
            validation={imageValidation}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
