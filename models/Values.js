const db = require('./db')


const Value = db.sequelize.define('valuers', {
  value:{
    type: db.Sequelize.DECIMAL(5,2)
  },
  id_product:{
    type: db.Sequelize.INTEGER,
    references: 'products',
    referencesKey: 'id'
  },
  id_marketplace:{
    type: db.Sequelize.INTEGER
  }
});

module.exports = Value;




