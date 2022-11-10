const User = require("../../models/User");

  function VerifyUserLogin(req, res){
    const email =  req.body.email
    const password = req.body.password
    if(!email && !password){
      res.send({error: true}) 
      return
    }
    User.findAll({order: [['id', 'DESC']], where: {'email' : email, 'password':password}}).then(
      function(response){
        res.send({success: true, exists: response.length > 0})
      }
    )
  }
module.exports = VerifyUserLogin;