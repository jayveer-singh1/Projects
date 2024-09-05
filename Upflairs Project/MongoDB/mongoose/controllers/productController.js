const { products } = require('../products.js')
const Product = require('../models/productModel.js')

exports.allProducts = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: products
    })
}

exports.singleProduct = (req, res) => {
    let { id } = req.params
    let product = products.find((v, i) => v.id == id)
    if (product) res.status(200).json({
        status: 'success',
        data: product
    })
    else res.status(400).json({
        status: 'failed',
        msg: 'product not found'
    })
}

exports.addProduct =async (req, res) => {
    console.log(req.body)
    res.json({ status: 'success' })
    let { name, price, brand, image } = req.body
    let product = new Product()
    product.name = name
    product.price= price
    product.brand= brand
    product.image= image
    await product.save()


    // let { name } = req.body

    // let id = products[products.length - 1].id + 1
    // products.push({ id, name })
    // res.json({
    //     status: 'success',
    //     data: { id, name }
    // })
}

exports.updateProduct = (req, res) => {
    let { id } = req.params
    let { name } = req.body
    let product = products.find((v, i) => v.id == id)
    if (product) {
        let index = products.indexOf(product)
        products.splice(index, 1, { id, name })
        res.status(200).json({
            status: 'success',
            msg: 'product updated'
        })
    }
    else res.status(400).json({
        status: 'failed',
        msg: 'product not found'
    })
}

exports.deleteProduct = (req, res) => {
    let { id } = req.params

    let product = products.find((v, i) => v.id == id)
    if (product) {
        let index = products.indexOf(product)
        products.splice(index, 1)
        res.status(200).json({
            status: 'success',
            msg: 'product deleted'
        })
    }
    else res.status(400).json({
        status: 'failed',
        msg: 'product not found'
    })

}


