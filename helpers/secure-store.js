import * as SecureStore from "expo-secure-store";

export const saveInStore = async (key, value) => {
  const convertedValue = JSON.stringify(value);

  try {
    await SecureStore.setItemAsync(key, convertedValue);
  } catch (error) {
    console.error("error saving in store", error);
  }
};

export const getFromStore = async (key) => {
  let value;

  try {
    const result = await SecureStore.getItemAsync(key);

    if (result) value = JSON.parse(result);
    return value;
  } catch (error) {
    console.error("error getting from store", error);
  }
};

export const deleteFromStore = async (key) => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.error("error deleting from store", error);
  }
};
