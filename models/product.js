const fs = require("fs");
const path = require("path");
const p = path.join(__dirname, "../data", "products.json");
const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContet) => {
    if (err) {
      return cb([]);
    }
    cb(JSON.parse(fileContet));
  });
};
module.exports = class Product {
  constructor(title, author, imageUrl, description, price) {
    this.title = title;
    this.author = author;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }
  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
