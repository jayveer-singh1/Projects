let fs = require("fs")  

let read =fs.readFileSync('demo.html','utf-8')
// console.log(read)
let apend = fs.appendFileSync('demo.html','<title> This is fs</title>','utf-8')
// console.log(apend)
