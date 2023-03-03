'use strict'
const mongoose = require('mongoose')
const path = require('path')
const userSchema = new mongoose.Schema({
    userName: String,
    email: String,
    passWord: String,
    
})
module.exports = mongoose.model('users', userSchema)

// console.log("filename is ==>", __filename)
// console.log("directory nameeclear is ", __dirname)
// console.log("base of filenaem ", path.basename(__filename))
// console.log("base of dirname", path.basename(__dirname))
// console.log("over all of the filename", path.parse(__filename))
// console.log("over all of the filename in string", path.format(path.parse(__filename)))
// console.log("absulate path====>", path.isAbsolute('./LoginNodeMongoSecond/index.js'))
// let file1="folder"
// let file2="dir"
// let file3="filename.html"
// console.log("file name is===>",path.join(file1,file2,file3))
// console.log("joining filename==>",path.join('__dirname',"data.json"))
// console.log("file name is===>",path.join(file1,file2,file3))
// console.log("joining filename==>",path.join('__dirname',"data.json"))

