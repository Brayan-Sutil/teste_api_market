const Product = require("../../models/Product")

function RenderProducts(req, res){
  Product.findAll().then(function(data){
    res.send({ data})
  }
  )
}
module.exports = RenderProducts;