import AsyncStorage from '@react-native-community/async-storage';

export const setItemAsync = async (
  key: string,
  value: string,
): Promise<null> => {
  return await AsyncStorage.setItem(key, value);
};

export const getItemAsync = async (key: string): Promise<null> => {
  return await AsyncStorage.getItem(key, null);
};
