const Product = require("../../models/Product")
const Values = require('../../models/Values')

Product.hasMany(Values,{
  foreignKey: 'id_product'
})

Values.belongsTo(Product,{
  foreignKey: 'id_product'
})

function RenderProducts(req, res){
  Product.findAll({
    include: Values
  }).then(function(data){
    res.send({ data})
  })
}
module.exports = RenderProducts;