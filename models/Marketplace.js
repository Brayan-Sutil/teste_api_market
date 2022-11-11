const db = require('./db')

const Market = db.sequelize.define('marketplaces', {
  name:{
    type: db.Sequelize.STRING
  },
  imagens:{
    type: db.Sequelize.DOUBLE
  }
});

module.exports = Market;
