const User = require("../../models/User");
  function verificarEmail(req, res){
    const email =  req.body.email
    if(!email){
      res.send({error: true}) 
      return
    }
    User.findAll({order: [['id', 'DESC']], where: {'email' : email}}).then(
      function(response){
        res.send({sucess: true, exists: response.length > 0 })
      }
    )
  }
module.exports = verificarEmail;