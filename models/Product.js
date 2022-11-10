const db = require('./db')

const Product = db.sequelize.define('products', {
  name:{
    type: db.Sequelize.STRING
  },
  brand:{
    type: db.Sequelize.STRING
  },
  weight:{
    type: db.Sequelize.INTEGER
  },
  imagens:{
    type: db.Sequelize.DOUBLE
  }
});

module.exports = Product;

