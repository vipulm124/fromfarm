import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const CustomTextInput = ({ placeholder, onChangeText, value, style, maxLength, keyboardType = "default" }) => {
    return (
        <TextInput
            style={[styles.input, style]}
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
            maxLength={maxLength}
            keyboardType={keyboardType}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
});

export default CustomTextInput;
