const Product = require('../../models/Product')

function addProduct (req, res){

  const name = req.body.name
  const brand = req.body.brand
  const weight = req.body.weight
  const imagens = null

  if( !!name && !!brand && !!weight ){
    Product.create({
      name: name,
      brand: brand,
      weight: weight,
      imagens: imagens,
    }).then(function(){
      res.send({success: true, name, brand, weight})
    }).catch(function(error){ 
      res.send({success: false,  error: error})
    })
  }else{
    res.send({success: false, error: "Preencha todos os dados dos Produtos!!"})
  }
}

module.exports = addProduct;