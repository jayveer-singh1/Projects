const http = require('node:http')

let server = http.createServer((request, response) => {
    if (request.url == '/') {
        response.write('This is a home page')
        response.end()
    }
    else if (request.url == '/products') {
        response.end('This is product page')
    }
    else if(request.url=='/service'){
        response.end('This is service page')
    }
    else if(request.url=='/service'){
        response.end('This is service page')
    }
})


server.listen(3000, 'localhost', () => {
    console.log('Server is Running.......')
})