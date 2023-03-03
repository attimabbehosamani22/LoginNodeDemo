const userDb = require('../models/user')
const userModel = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const secret_key = 'NOTESAPI'
const signin = async (req, res) => {
    const { email, passWord, userName } = req.body
    console.log("req.bodyyyyyyyyyyyyyyyyyyyyyyyy")
    console.log("bodyyyyyyyyyyyyyyyyyyyyyyyy ", req.body.passWord)
    try {
        const existingUser = await userModel.findOne({ email: email })
        if (existingUser) {
            return res.status(400).json({ message: "user already exist" })
        }

        const hasPassword = await bcrypt.hash(passWord, 10)
        console.log("hashPassword ", hasPassword)
        const result = await userModel.create({
            email: email,
            userName: userName,
            passWord: hasPassword
        })
        console.log("user created")
        const token = jwt.sign({ email: result.email, id: result.id }, secret_key)
        res.status(201).json({ user: result, token: token })
    }
    catch (error) {
        res.status(500).json({ message: "something went wrong" })
    }

}
const signup = (req, res) => {

}


module.exports = { signup, signin }