// components/Home.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import ProductItem from '../../component/ProductItem';
import { productStore } from '../../component/stores/productStore';
import { windowWidth } from '../../common/Utils';


const { width } = Dimensions.get('window');

const Home = ({ navigation }) => {

    const myProductStore = productStore()

    const handleImageClick = (item) => {
        console.log('Image clicked:', item);
        navigation.navigate("Listing", { productId: item.productId });
        // Handle click event
    };

    const handleBannerImageClick = (item) => {
        console.log(item);
        navigation.navigate("Listing", { bannerId: item.id });

    }

    const renderItem = ({ item }) => {
        return (
            <View style={styles.imageContainer}>
                <Pressable onPress={() => handleBannerImageClick(item)}>
                    <Image style={styles.image} source={item.imagePath} />
                </Pressable>
            </View>
        );
    };

    const renderItemGrid = () => {
        return (
            <View style={styles.gridContainer}>
                {myProductStore.images.map((item, index) => (
                    <Pressable key={index} style={styles.gridItem} onPress={() => handleImageClick(item)}>
                        <Image style={styles.gridImage} source={item.imagePath} />
                    </Pressable>
                ))}
            </View>
        )
    }

    return (
        <ScrollView>

            <FlatList data={myProductStore.banner} renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={true} pagingEnabled={true}
                snapToInterval={Dimensions.get('window').width}
                decelerationRate="fast" />

            {renderItemGrid()}


        </ScrollView>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        width: Dimensions.get('window').width,
        height: 250,
        borderRadius: 16,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        marginTop: 10
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        aspectRatio: 1.45
    },
    gridItem: {
        width: '48%',
        aspectRatio: 1,
        marginBottom: 10,
    },
    gridImage: {
        flex: 1,
        resizeMode: 'cover',
        borderRadius: 8,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        aspectRatio: 1
    },
    gridContainer: {
        marginTop: 10,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 10
    }

});

export default Home;
