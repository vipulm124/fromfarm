import React from "react";
import { productStore } from "../component/stores/productStore"
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { useRoute } from "@react-navigation/native";



function ProductDisplay({ navigation }) {
    const myProductStore = productStore()
    const route = useRoute()
    const id = route.params?.id
    const bannerId = route.params?.bannerId
    const currentProductDetails = myProductStore.products.find(x => x.id == id && x.bannerId == bannerId)

    return (
        < Pressable style={styles.container} >
            <Image source={currentProductDetails.imagePath} style={styles.image} />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{currentProductDetails.title}</Text>
                <Text style={styles.detail}>{currentProductDetails.price} INR</Text>
                <Text style={styles.detail}>{currentProductDetails.deliveryTime}</Text>
                <Text style={styles.detail}>{currentProductDetails.stock}</Text>
                <Text style={styles.detail}>{currentProductDetails.deliveryTime}</Text>
                <Text style={styles.detail}>{currentProductDetails.stock}</Text>
                <Text style={styles.detail}>{currentProductDetails.deliveryTime}</Text>
                <Text style={styles.detail}>{currentProductDetails.stock}</Text>
                <Text style={styles.detail}>{currentProductDetails.deliveryTime}</Text>
                <Text style={styles.detail}>{currentProductDetails.stock}</Text>


            </View>
        </Pressable >
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginTop: 10,
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
        paddingBottom: 5
    },
    detail: {
        fontSize: 14,
        color: 'gray',
        paddingBottom: 5
    },
});


export default ProductDisplay