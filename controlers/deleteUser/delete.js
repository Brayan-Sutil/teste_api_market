const User = require('../../models/User')

function deleteUser (req,res){
  const UserDelete =  req.params.id

  User.destroy({where: {'id' : UserDelete}}).then(
    function(){
      res.send({success: true}, 'Ocorreu tudo certo ao deletar seu usuario!!!')
    }
  ).catch(
    function(error){
      res.send({success: false}, 'Algo deu errado ao deletar seu usuario: ' + error)
    }
  )
}

module.exports = deleteUser;