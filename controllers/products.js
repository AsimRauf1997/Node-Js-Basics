const Product = require("../models/product");
exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    activeAddProduct: true,
    path: "/admin/add-product",
  });
};
exports.postAddProduct = (req, res, next) => {
  const { title, author } = req.body;
  const product = new Product(title, author);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
    });
  });
};
