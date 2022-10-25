const User = require('../../models/User')

function addUser (req, res){

  const name = req.body.name;
  const email_user= req.body.email;
  const password = req.body.password;

  if( !!nome || !!email_user || !!senha){
    User.create({
      name: name,
      email: email_user,
      password: password,
    }).then(function(){
      res.send({success: true, nome, email_user, senha})
    }).catch(function(error){
      res.send({success: false,  error})
    })
  }else{
    res.send({success: false, error: "Preencha todos os dados dos Usuario!!"})
  }
}

module.exports = addUser;