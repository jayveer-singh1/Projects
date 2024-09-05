const http = require('node:http')
const fs = require('node:fs')
const path = require('node:path')

let homeHtml = fs.readFileSync(path.join(__dirname, 'Home.html'), 'utf-8');
let aboutHtml = fs.readFileSync(path.join(__dirname, 'About.html'), 'utf-8')
let contactHtml = fs.readFileSync(path.join(__dirname, 'Contact.html'), 'utf-8')
let productHtml = fs.readFileSync(path.join(__dirname, 'Products.html'), 'utf-8')
let serviceHtml = fs.readFileSync(path.join(__dirname, 'Service.html'), 'utf-8')

let server = http.createServer((req, res) => {
    if (req.method == 'GET' && req.url == '/') {
        res.setHeader('Content-Type', 'text/html')
        res.writeHead(200)
        res.end(homeHtml)
    }
    else if (req.url == '/about') {
        res.setHeader('Content-Type', 'text/html')
        res.writeHead(201)
        res.end(aboutHtml)
    }
    else if (req.url == '/contact') {
        res.setHeader('Content-Type', 'text/html')
        res.writeHead(200)
        res.end(contactHtml)
    }
    else if (req.url == '/products') {
        res.setHeader('Content-Type', 'text/html')
        res.writeHead(200)
        res.end(productHtml)
    }
    else if (req.url == '/service') {
        res.setHeader('Content-Type', 'text/html')
        res.writeHead(200)
        res.end(serviceHtml)
    }
})

server.listen(3000, 'localhost', () => {
    console.log('The server is running on port 3000....')
})