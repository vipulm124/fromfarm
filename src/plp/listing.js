import React from 'react'
import { FlatList, StyleSheet } from 'react-native';
import ProductItem from '../component/ProductItem';
import { productStore } from '../component/stores/productStore'
import { useRoute } from '@react-navigation/native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

function Listing({ navigation }) {

    const myProductStore = productStore()
    const route = useRoute()
    const bannerId = route.params?.bannerId
    const productId = route.params?.productId

    const currentBannerResponse = bannerId != undefined ? myProductStore.products.filter(x => x.bannerId == bannerId) : myProductStore.products.filter(x => x.productId == productId)

    return (
        <FlatList
            style={{ paddingTop: 20, marginBottom: 50 }}
            data={currentBannerResponse}
            renderItem={({ index, item }) => <ProductItem navigation={navigation} key={index} product={item} />}
            showsVerticalScrollIndicator={false}
        />
    )
}

export default Listing;