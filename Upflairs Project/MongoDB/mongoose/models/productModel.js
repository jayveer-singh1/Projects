const mongoose = require('mongoose')


const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        price: {
            type: Number,
            require: true
        },
        brand: {
            type: String
        },
        image: {
            type: String
        },
        created_At: {
            type: Date
        },
        updated_At: {
            type: Date
        }
    }
)

exports.Product = mongoose.model('Product', ProductSchema)