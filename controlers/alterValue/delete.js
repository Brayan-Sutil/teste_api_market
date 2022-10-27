const Value = require('../../models/Values')

function alterValue (req,res){

  const valueAlter =  req.params.id

  Value.update({where: {'id' : valueAlter}}).then(
    function(){
      res.send({success: true},'Valor editado com sucesso!!!')
    }
  ).catch(
    function(error){
      res.send({success: false},'Algo deu errado ao editar esse valor: '+ error)
    }
  )
}

module.exports = alterValue;
