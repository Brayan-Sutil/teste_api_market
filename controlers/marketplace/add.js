const market = require('../../models/Marketplace')

function addMarket (req, res){
  const name = req.body.name
  const imagens = null
  if( !!nome  ){
    market.create({
      name: name,
      imagens: imagens
    }).then(function(){
      res.send({success: true, name, imagens})
    }).catch(function(error){ 
      res.send({success: false,  erro: error})
    })
  }else{
    res.send({success: false, error: "Preencha todos os dados do Mercado!!"})
  }
}

module.exports = addMarket;