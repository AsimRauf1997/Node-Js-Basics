const expres = require("express");
const path = require("path");
const router = expres.Router();
router.get("/", (req, res, next) => {
  console.log("In  middleWare:");
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

module.exports = router;
