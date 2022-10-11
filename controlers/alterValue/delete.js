const Value = require('../../models/Values')

function alterValue (req,res){

  const valueAlter =  req.params.id

  Value.destroy({where: {'id' : valueAlter}}).then(
    function(){
      res.send('Ocorreu tudo certo ao editar esse valor!!!')
    }
  ).catch(
    function(error){
      res.send('Algo deu errado ao editar esse valor: '+ error)
    }
  )
}

module.exports = alterValue;
