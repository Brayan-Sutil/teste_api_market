const Product = require("../../models/Product")

function verifyProduct(req, res){
    const name =  req.body.name
    const brand = req.body.brand
    if(!name && !brand){
      res.send({error: true}) 
      return
    }
    Product.findAll({order: [['id', 'DESC']], where: {'name' : name, 'brand' : brand}}).then(
      function(response){
        res.send({success: true, exists: response.length > 0})
      }
    )
  }
module.exports = verifyProduct;