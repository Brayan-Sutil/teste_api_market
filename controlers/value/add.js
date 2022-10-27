const Valuers = require('../../models/Values')

function addValues (req, res){

  const values = req.body.value
  const idProduct = req.body.id_product
  const idMarketplace = req.body.id_marketplace

  if( !!values && !!idProduct && !!idMarketplace ){
    Valuers.create({
      value: values,
      id_product: idProduct,
      id_marketplace: idMarketplace
    }).then(function(){
      res.send({success: true, values, idProduct, idMarketplace})
    }).catch(function(error){ 
      res.send({success: false,  error: error})
    })
  }else{
    res.send({success: false, error: "Preencha todos os dados dos Produtos!!"})
  }
}

module.exports = addValues;