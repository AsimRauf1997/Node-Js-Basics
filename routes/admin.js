const expres = require("express");
const path = require("path");
const router = expres.Router();

const products = [];
// /admin/add-product
router.get("/add-product", (req, res, next) => {
  // res.sendFile(path.join(__dirname, "..", "views", "add-product.html"));
  res.render("add-product", {
    pageTitle: "Add Product",
    activeAddProduct: true,
    path: "/admin/add-product",
  });
});
// /admin/product
router.post("/add-product", (req, res, next) => {
  const { title, author } = req.body;
  products.push({ author: author, title: title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
