const User = require('../../models/User')

function addUser (req, res){

  const nome = req.body.name;
  const email_user= req.body.email;
  const senha = req.body.password;

  if( !!nome || !!email_user || !!senha){
    User.create({
      name: nome,
      email: email_user,
      password: senha,
    }).then(function(){
      res.send({success: true, nome, email_user, senha})
    }).catch(function(error){
      res.send({success: false,  error})
    })
  }else{
    res.send({success: false, error: "Preencha todos os dados dos Produtos!!"})
  }
}

module.exports = addUser;