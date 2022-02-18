const expres = require("express");
const path = require("path");
const router = expres.Router();
// /admin/add-product
router.get("/add-product", (req, res, next) => {
  console.log("In the another middleWare:");
  res.sendFile(path.join(__dirname, "..", "views", "add-product.html"));
});
// /admin/product
router.post("/add-product", (req, res, next) => {
  const { title, author } = req.body;
  console.log(title, author);
  res.redirect("/");
});

module.exports = router;
