// The path module is used to working with files and directories path

const path = require('node:path')

// let fileName = ()=>{
//     console.log(__filename)   //this path module is used to show the file location on local system
//     console.log(path.basename(__filename)) //last porsion of the file location 
//     console.log(path.extname(__filename)) // extension of the file
//     console.log(path.parse(__filename))  // it is return an object (root, dir, base, ext, name)
//     console.log(path.format(path.parse(__filename)))  // return dir
//     console.log(path.isAbsolute(__filename))// is is an absoluete path
//     console.log(path.isAbsolute('./index.js'))   // it  is not a absolute path
// }
// fileName()


// let dirName=()=>{
//     console.log(__dirname)  //this path module is used to show the current directory/folder
//     console.log(path.basename(__dirname))  //last portion of folder or directory
//     console.log(path.extname(__dirname)) // not show because it not have any extension
//     console.log(path.parse(__dirname))  // it is return an object (root, dir, base, ext, name)
// }
// dirName()


// console.log(path.join('\folder 1', 'folder 2', 'folder 3'))
// console.log(path.join('\folder 1', '\\folder 2', 'folder 3'))
// console.log(path.join('\folder 1', '\\folder 2', 'folder 3'))
// console.log(path.join('\folder 1',__dirname))


console.log(path.resolve('\folder 1', 'folder 2', 'folder 3'))
console.log(path.resolve('\folder 1', '\\folder 2', 'folder 3'))
console.log(path.resolve('\folder 1', '\\folder 2', 'folder 3'))
console.log(path.resolve('\folder 1',__dirname))
