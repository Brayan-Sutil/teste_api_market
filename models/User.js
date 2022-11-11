const db = require('./db')

const User = db.sequelize.define('Users', {
  name:{
    type: db.Sequelize.STRING
  },
  email:{
    type: db.Sequelize.STRING
  },
  password:{
    type: db.Sequelize.STRING
  }
});

module.exports = User;

