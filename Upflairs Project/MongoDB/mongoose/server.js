const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose') 

const app = express()
const productRoutes = require('./routes/product.js')

mongoose.connect('mongodb+srv://xyz90:5qlkqN1AB25aWLzj@cluster0.dlmwxmw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/products')

app.use(cors())
// app.use(cors({
//     origin:'*',
//     methods:['GET'],
//     allowedHeaders:[]
// }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/product', productRoutes)



app.listen(3000, 'localhost', () => {
    console.log('server is running on port 3000')

})

