// components/CustomImage.js

import React from 'react';
import { Image, StyleSheet } from 'react-native';

const CustomImage = ({ text, style, imageSourse }) => {
    return <Image source={imageSourse} style={[styles.defaultStyles, style]} />;
};

const styles = StyleSheet.create({
    defaultStyles: {
        height: 50,
        width: 50
    },
});

export default CustomImage;
