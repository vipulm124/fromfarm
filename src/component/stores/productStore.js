import { create } from "zustand";

export const productStore = create((set) => ({
    banner: [
        {
            id: 1,
            title: 'Organic',
            imagePath: require("../../../assets/images/products/organicbanner.jpeg")
        },
        {
            id: 2,
            title: 'Seasonal',
            imagePath: require("../../../assets/images/products/seasonalbanner.jpeg")
        },
        {
            id: 3,
            title: 'AllSeason',
            imagePath: require("../../../assets/images/products/allseasonbanner.jpeg")
        }
    ],
    images: [
        {
            productId: 1,
            imagePath: require('../../../assets/images/products/apple.jpeg')
        },
        {
            productId: 2,
            imagePath: require('../../../assets/images/products/avacado.jpeg')
        },
        {
            productId: 3,
            imagePath: require('../../../assets/images/products/pear.jpeg')
        },
        {
            productId: 4,
            imagePath: require('../../../assets/images/products/mango.jpeg')
        }
    ],
    products: [
        {
            id: 1,
            productId: 2,
            bannerId: 1,
            title: "Avacado",
            imagePath: require("../../../assets/images/products/avacado.jpeg"),
            price: 5000,
            deliveryTime: "Free delivery Today",
            stock: "120 boxes available"
        },
        {
            id: 2,
            productId: 1,
            bannerId: 1,
            title: "Apple",
            imagePath: require("../../../assets/images/products/apple.jpeg"),
            price: 200,
            deliveryTime: "Free delivery Tomorrow",
            stock: "30 boxes available"
        },
        {
            id: 3,
            productId: 3,
            bannerId: 2,
            title: "Pear",
            imagePath: require("../../../assets/images/products/pear.jpeg"),
            price: 150,
            deliveryTime: "Free delivery Wednesday",
            stock: "90 boxes available"
        },
        {
            id: 4,
            productId: 4,
            bannerId: 2,
            title: "Mango",
            imagePath: require("../../../assets/images/products/mango.jpeg"),
            price: 500,
            deliveryTime: "Free delivery Today",
            stock: "120 boxes available"
        },
        {
            id: 5,
            productId: 1,
            bannerId: 3,
            title: "Apple",
            imagePath: require("../../../assets/images/products/apple.jpeg"),
            price: 490,
            deliveryTime: "Free delivery Tomorrow",
            stock: "30 boxes available"
        },
        {
            id: 6,
            productId: 3,
            bannerId: 3,
            title: "Pear",
            imagePath: require("../../../assets/images/products/pear.jpeg"),
            price: 650,
            deliveryTime: "Free delivery Wednesday",
            stock: "90 boxes available"
        }
    ]
}))