import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

const Button = ({ onPress, title, style, disabled = false }) => {
    return (
        <Pressable style={[styles.button, style]} onPress={onPress} >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 16,
    },
});

export default Button;
