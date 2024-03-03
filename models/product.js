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

const Product = model("product", productSchema)

module.exports = Product;