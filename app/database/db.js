require('dotenv').config()
const mongoose = require('mongoose');
exports.connectMonggose =()=>{
    mongoose.connect('mongodb+srv://tanisharawat1100:dWDyGD5y7HFLUMJo@cluster0.lthfpi7.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewUrlParser: true
    })
    .then((e)=>console.log("Connected to Mongodb =>> Ecommerce API"))
    .catch((e)=>console.log("Not Connect Mongodb"))
}
