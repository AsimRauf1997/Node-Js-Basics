const expres = require("express");
const path = require("path");
const router = expres.Router();
const adminData = require("./admin");

router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
  });
});

module.exports = router;
