import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dimensions } from 'react-native';

const STORAGE_KEY_USER = 'userprofile'

export const addKey = async (value) => {
    try {
        await AsyncStorage.setItem(STORAGE_KEY_USER, value);
        return "UserProfile added.";

    } catch (e) {
        console.error('Error adding key:', e);
    }
};

export const mergeKey = async (value) => {
    try {
        await AsyncStorage.mergeItem(STORAGE_KEY_USER, value);
        console.log('Key updated successfully');
    } catch (e) {
        console.error('Error updating key:', e);
    }
};

export const fetchKey = async () => {
    try {
        result = await AsyncStorage.getItem(STORAGE_KEY_USER);
        return result;
    } catch (e) {
        console.error('Error fetching key:', e);
        return null;
    }
};

export const removeKey = async () => {
    try {
        await AsyncStorage.removeItem(STORAGE_KEY_USER);
        return "Cleared key";

    } catch (e) {
        console.error('Error fetching key:', e);
        return null;
    }
};

export const windowWidth = () => {
    return Dimensions.get('window').width;
}