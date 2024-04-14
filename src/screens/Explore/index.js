// components/Home.js
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


const Explore = () => {

    return (
        <View style={styles.container}>
            <Text>Explore Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
});

export default Explore;
