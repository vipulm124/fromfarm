import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

const ProductItem = ({ navigation, product, onClick }) => {
    const handleProductClick = () => {
        navigation.navigate("Product", { id: product.id, bannerId: product.bannerId })
    }


    return (
        <Pressable style={styles.container} onPress={() => handleProductClick()}>
            <Image source={product.imagePath} style={styles.image} />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>{product.price} INR</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginBottom: 20,
        alignItems: 'center',
        padding: 10,
        marginHorizontal: 10,
        elevation: 2,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 10,
    },
    detailsContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 14,
        color: 'gray',
    },
});

export default ProductItem;
