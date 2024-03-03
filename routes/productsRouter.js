const express = require("express")

const {
  getAllProducts,
  // getOneContact,
  // deleteContact,
  // createContact,
  // updateContact,
  // updateFavorite
} = require("../controllers/productsControllers.js")

// const isValidId = require("../helpers/validateBody.js")

const productsRouter = express.Router();

productsRouter.get("/", getAllProducts);

// contactsRouter.get("/:id", isValidId, getOneContact);

// contactsRouter.delete("/:id", isValidId, deleteContact);

// contactsRouter.post("/", createContact);

// contactsRouter.put("/:id", isValidId, updateContact);

// contactsRouter.patch("/:id/favorite", isValidId, updateFavorite);

module.exports = productsRouter;
