const express = require("express");
const productsRouter = express.Router();
const { Users, Products, Cart } = require("../models");

// Ruta para obtener todos los productos
productsRouter.get("/", (req, res, next) => {
  Products.findAll()
    .then((productos) => {
      res.status(200).json(productos);

});
});

productsRouter.get("/:id", (req, res, next) => {
  const { id } = req.params;
  Products.findByPk(id)
    .then((product) => {
      res.send(product);
    })
    .catch((err) => next(err));
})

productsRouter.post("/create", (req, res, next) => {
  Products.create(req.body)
    .then((newProduct) => {
      res.status(201).json(newProduct);
 })
    .catch((error) => {
      next(error);
    });
});

productsRouter.put("/:id", (req, res) => {
  const productId = req.params.id;

  Products.findByPk(productId).then((product) => {
    product
      .update(req.body, {
        returning: true,
      })
      .then((response) => res.status(200).send(response))
      .catch(err=>console.error(err))
  });
});


module.exports = productsRouter;


