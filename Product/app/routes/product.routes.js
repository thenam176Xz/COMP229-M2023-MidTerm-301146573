module.exports = app => {

  const products = require("../controllers/product.controller.js");

 

  var router = require("express").Router();

 

  // Create a new Product

  router.post("/create", products.create);

 

  // Retrieve all Products

  router.get("/getall", products.findAll);

 

  // Retrieve all published Products

  router.get("/getallpublished", products.findAllPublished);

 

  // Retrieve a single Product with id

  router.get("/getproduct/:id", products.findOne);

 

  // Update a Product with id

  router.put("/update/:id", products.update);

 

  // Delete a Product with id

  router.delete("/delete/:id", products.delete);

 

  // Delete all Products

  router.delete("/deleteall", products.deleteAll);

 

  app.use('/api/products', router);

};