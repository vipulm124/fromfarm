// components/CustomLabel.js

import React from 'react';
import { Text, StyleSheet } from 'react-native';

const CustomLabel = ({ text, style }) => {
    return <Text style={[styles.label, style]}>{text}</Text>;
};

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333', // Default color
        // Additional styles can be added here
    },
});

export default CustomLabel;
