const Product = require('../../models/Product')

function deleteProduct (req,res){
  Product.destroy({where: {'id' : req.body.id}}).then(
    function(){
      res.send('Ocorreu tudo certo!!!')
    }
  ).catch(
    function(erro){
      res.send('Algo deu errado!: '+ erro)
    }
  )
}

module.exports = deleteProduct;
