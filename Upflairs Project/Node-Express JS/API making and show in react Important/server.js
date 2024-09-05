const express = require('express');
const app = express();
const { products } = require('./products.js'); 
const cors = require('cors')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('', (req, res) => {
    res.json(products);
});

app.get('/product', (req, res) => {
    res.status(200).json({
        status: 'success',
        data: products
    });
});

app.get('/product/:id', (req, res) => {
    let { id } = req.params;
    let product = products.find((v) => v.id == id);
    if (product) {
        res.status(200).json({
            status: 'success',
            data: product
        });
    } else {
        res.status(400).json({
            status: 'failed',
            msg: 'product not found'
        });
    }
});

app.post('/product', (req, res) => {
    let {
        title,
        description,
        category,
        price,
        discountPercentage,
        rating,
        stock,
        brand,
        sku,
        weight
    } = req.body;

    let id = products[products.length - 1].id + 1;
    let newProduct = {
        id,
        title,
        description,
        category,
        price,
        discountPercentage,
        rating,
        stock,
        brand,
        sku,
        weight
    };
    
    products.push(newProduct);

    res.json({
        status: 'success',
        data: newProduct
    });
});  

app.delete('/product/:id', (req, res) => {
    let { id } = req.params;
    let product = products.find((v) => v.id == id);

    if (product) {
        let index = products.indexOf(product);
        products.splice(index, 1);
        res.status(200).json({
            status: 'success',
            msg: 'product deleted'
        });
    } else {
        res.status(400).json({
            status: 'failed',
            msg: 'product not found'
        });
    }
});

app.put('/product/:id', (req, res) => {
    let { id } = req.params;
    let {
        title,
        description,
        category,
        price,
        discountPercentage,
        rating,
        stock,
        brand,
        sku,
        weight
    } = req.body;

    let product = products.find((v) => v.id == id);

    if (product) {
        let updatedProduct = {
            id,
            title,
            description,
            category,
            price,
            discountPercentage,
            rating,
            stock,
            brand,
            sku,
            weight
        };

        let index = products.indexOf(product);
        products.splice(index, 1, updatedProduct);

        res.status(200).json({
            status: 'success',
            msg: 'product updated'
        });
    } else {
        res.status(400).json({
            status: 'failed',
            msg: 'product not found'
        });
    }
});

app.listen(3000, 'localhost', () => {
    console.log('server is running on port 3000');
});
