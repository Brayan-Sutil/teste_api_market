const Product = require('../../models/Product')

function deleteProduct (req,res){

  const ProductDelete =  req.params.id

  Product.destroy({where: {'id' : ProductDelete}}).then(
    function(){
      res.send({sucess: true},'Produto deletado !!!')
    }
  ).catch(
    function(error){
      res.send({sucess: false},'Algo deu errado ao deletar seu produto: '+ error)
    }
  )
}

module.exports = deleteProduct;
