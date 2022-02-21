const Product = require("../models/product");
exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    activeAddProduct: true,
    path: "/admin/add-product",
  });
};
exports.postAddProduct = (req, res, next) => {
  console.log("postAddProduct:", req.body);
  const { title, author, imageUrl, description, price } = req.body;
  const product = new Product(title, author, imageUrl, description, price);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      prods: products,
      pageTitle: "Admin Products",
      path: "/admin/products",
    });
  });
};
