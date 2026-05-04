const express = require('express');
const app = express();

let port = process.env.PORT || 4000;


app.get('/', (req, res) => {
    res.send('Welcome to my backend world , aj se backend start!');
});

const products = [
    {
        "id": 121,
        "title": "iPhone 5s",
        "description": "The iPhone 5s is a classic smartphone known for its compact design and advanced features during its release. While it's an older model, it still provides a reliable user experience.",
        "category": "smartphones",
        "price": 199.99,
        "discountPercentage": 12.91
    },
    {
        "id": 122,
        "title": "iPhone 6",
        "description": "The iPhone 6 is a stylish and capable smartphone with a larger display and improved performance. It introduced new features and design elements, making it a popular choice in its time.",
        "category": "smartphones",
        "price": 299.99,
        "discountPercentage": 6.69
    },
    {
        "id": 123,
        "title": "iPhone 13 Pro",
        "description": "The iPhone 13 Pro is a cutting-edge smartphone with a powerful camera system, high-performance chip, and stunning display. It offers advanced features for users who demand top-notch technology.",
        "category": "smartphones",
        "price": 1099.99,
        "discountPercentage": 9.37
    },
    {
        "id": 124,
        "title": "iPhone X",
        "description": "The iPhone X is a flagship smartphone featuring a bezel-less OLED display, facial recognition technology (Face ID), and impressive performance. It represents a milestone in iPhone design and innovation.",
        "category": "smartphones",
        "price": 899.99,
        "discountPercentage": 19.59
    },
    {
        "id": 125,
        "title": "Oppo A57",
        "description": "The Oppo A57 is a mid-range smartphone known for its sleek design and capable features. It offers a balance of performance and affordability, making it a popular choice.",
        "category": "smartphones",
        "price": 249.99,
        "discountPercentage": 2.43
    },
    {
        "id": 126,
        "title": "Oppo F19 Pro Plus",
        "description": "The Oppo F19 Pro Plus is a feature-rich smartphone with a focus on camera capabilities. It boasts advanced photography features and a powerful performance for a premium user experience.",
        "category": "smartphones",
        "price": 399.99,
        "discountPercentage": 18.64
    },
    {
        "id": 127,
        "title": "Oppo K1",
        "description": "The Oppo K1 series offers a range of smartphones with various features and specifications. Known for their stylish design and reliable performance, the Oppo K1 series caters to diverse user preferences.",
        "category": "smartphones",
        "price": 299.99,
        "discountPercentage": 18.29
    },
    {
        "id": 128,
        "title": "Realme C35",
        "description": "The Realme C35 is a budget-friendly smartphone with a focus on providing essential features for everyday use. It offers a reliable performance and user-friendly experience.",
        "category": "smartphones",
        "price": 149.99,
        "discountPercentage": 15.3
    },
    {
        "id": 129,
        "title": "Realme X",
        "description": "The Realme X is a mid-range smartphone known for its sleek design and impressive display. It offers a good balance of performance and camera capabilities for users seeking a quality device.",
        "category": "smartphones",
        "price": 299.99,
        "discountPercentage": 6.95
    },
    {
        "id": 130,
        "title": "Realme XT",
        "description": "The Realme XT is a feature-rich smartphone with a focus on camera technology. It comes equipped with advanced camera sensors, delivering high-quality photos and videos for photography enthusiasts.",
        "category": "smartphones",
        "price": 349.99,
        "discountPercentage": 11.51
    }
]


app.get('/products', (req, res) => {
    res.json({ limit: 30, page: 1, products: products });
})

app.listen(port, () => {
    console.log("Server is runnning on port " + port);
})