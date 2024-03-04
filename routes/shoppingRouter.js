const express = require("express")

const {
    createShopping,
  // getOneContact,
  // deleteContact,
  // createContact,
  // updateContact,
  // updateFavorite
} = require("../controllers/productsControllers.js")

// const isValidId = require("../helpers/validateBody.js")

const shoppingRouter = express.Router();

shoppingRouter.post("/", createShopping);

// contactsRouter.get("/:id", isValidId, getOneContact);

// contactsRouter.delete("/:id", isValidId, deleteContact);

// contactsRouter.post("/", createContact);

// contactsRouter.put("/:id", isValidId, updateContact);

// contactsRouter.patch("/:id/favorite", isValidId, updateFavorite);

module.exports = shoppingRouter;