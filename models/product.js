const {Schema, model} = require("mongoose");

const productSchema = new Schema({   
    name: {
        type: String,
    },
    price: {
        type: String,
    },
}, { versionKey: false })

productSchema.post("save", (error, data, next)=>{
    error.status = 400
    next()
})
const shoppingSchema = new Schema({   
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    address: {
        type: String,
    },
    shopping: [
        {
            name: {
                type: String,
            },
            price: {
                type: String,
            },
        },
    ],
}, { versionKey: false })

shoppingSchema.post("save", (error, data, next)=>{
    error.status = 400
    next()
})

const Product = model("product", productSchema)
const Shopping = model("shopping", shoppingSchema)

module.exports = {
    Product,
    Shopping
};