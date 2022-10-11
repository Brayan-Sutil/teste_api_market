const Product = require('../../models/Product')

function addProduct (req, res){

  const nome = req.body.name
  const marca = req.body.brand
  const peso = req.body.weight
  const imagens = null

  if( !!nome && !!marca && !!peso ){
    Product.create({
      name: nome,
      brand: marca,
      weight: peso,
      imagens: imagens,
    }).then(function(){
      res.send({success: true, nome, marca, peso})
    }).catch(function(error){ 
      res.send({success: false,  erro: error})
    })
  }else{
    res.send({success: false, error: "Preencha todos os dados dos Produtos!!"})
  }
}

module.exports = addProduct;