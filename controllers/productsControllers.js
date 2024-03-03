const Product = require("../models/product")

// const HttpError = require("../helpers/HttpError")
// const {
//     createContactSchema,
//     updateContactSchema,
//     updateFavoriteSchema
// } = require("../schemas/contactsSchemas")

const getAllProducts = async (req, res, next) => {
    try {
        const result = await Product.find()
        res.json(result)
    }
    catch(error) {
        next(error)
    }
};

// const getOneContact = async (req, res, next) => {
//     try {
//         const {id} = req.params
//         const result = await Contact.findById(id)
//         if(!result){
//             throw HttpError(404, "Not found")
//         }
//         res.json(result)
//     }
//     catch(error) {
//         next(error)
//     }
// };

// const deleteContact = async (req, res, next) => {
//     try {
//         const {id} = req.params
//         const result = await Contact.findByIdAndDelete(id)
//         if(!result){
//             throw HttpError(404, "Not found")
//         }
//         res.json(result)
//     }
//     catch(error) {
//         next(error)
//     }
// };

// const createContact = async (req, res, next) => {
//     try {
//         const {error} = createContactSchema.validate(req.body)
//         if(error){
//             throw HttpError(400, error.message)
//         }
//         const result = await Contact.create(req.body)
//         res.status(201).json(result)
//     }
//     catch(error) {
//         next(error)
//     }
// };

// const updateContact = async (req, res, next) => {
//     try {
//         const {error} = updateContactSchema.validate(req.body)
//         if(error){
//             throw HttpError(400, error.message)
//         }
//         const {id} = req.params
//         if (Object.keys(req.body).length === 0) {
//             throw HttpError(400, "Body must have at least one field")
//         }
//         // const currentContact = await getContactById(id)
//         // const updatedContact = {
//         //     ...currentContact,
//         //     ...req.body
//         // }
//         const result = await Contact.findByIdAndUpdate(id, req.body, {new: true})
//         if(!result){
//             throw HttpError(404, "Not found")
//         }
//         res.json(result)
//     }
//     catch(error) {
//         next(error)
//     }
// };

// const updateFavorite = async (req, res, next) => {
//     try {
//         const {error} = updateFavoriteSchema.validate(req.body)
//         if(error){
//             throw HttpError(400, error.message)
//         }
//         const {id} = req.params
//         const result = await Contact.findByIdAndUpdate(id, req.body, {new: true})
//         if(!result){
//             throw HttpError(404, "Not found")
//         }
//         res.json(result)
//     }
//     catch(error) {
//         next(error)
//     }
// };

module.exports = {
    getAllProducts,
    // getOneContact,
    // deleteContact,
    // createContact,
    // updateContact,
    // updateFavorite
}