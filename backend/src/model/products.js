require('dotenv').config();
const sql = require('../config/database.js');

const productsDB = {
  getAllFeaturedProducts: function () {
    return new Promise((resolve, reject) => {
      sql`SELECT p.imageurl, p.name, p.description
        FROM homesteadhaven.products p
        INNER JOIN homesteadhaven.featured f ON p.productid = f.productid`
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          console.error(err);
          reject(err);
        });
    });
  },

  getAllProducts: function () {
    return new Promise((resolve, reject) => {
      sql`SELECT name, description, price, category, stockquantity, imageurl FROM homesteadhaven.products`
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          console.error(err);
          reject(err);
        });
    });
  },

  getProductsByCategory: function (category) {
    return new Promise((resolve, reject) => {
      sql`SELECT p.* FROM homesteadhaven.products p INNER JOIN homesteadhaven.Category c ON p.category = c.category_id WHERE c.category_name = ${category}`
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          console.error(err);
          reject(err);
        });
    });
  },

  editProduct: function (product_id, stockquantity) {
    return new Promise((resolve, reject) => {
      sql`UPDATE homesteadhaven.products SET stockquantity = ${stockquantity} WHERE productid = ${product_id}`
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          console.error(err);
          reject(err);
        });
    });
  },

  deleteProduct: function (product_id) {
    return new Promise((resolve, reject) => {
      sql`DELETE FROM homesteadhaven.products WHERE productid = ${product_id}`
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          console.error(err);
          reject(err);
        });
    });
  },

  addProduct: function (name, description, price, category, stockquantity, imageurl) {
    return new Promise((resolve, reject) => {
      // Implement the logic for adding a product here
      // Use sql`...` to execute the SQL query
      // Resolve or reject the Promise based on the result
    });
  }
};

module.exports = productsDB;
