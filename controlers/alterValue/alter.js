const Product = require("../../models/Product")

function alterValue(req, res){

  const id = req.body.id
  const newName = req.body.name

    if(!!id || !!newName ){
      Product.update({ name: newName }, {where: {'id': id}}).then(() => {
        res.send({success: true, id, newName})
      }).catch((error) => {
        res.send({success: false, error: error})
      })
    }else{
      res.send({success: false, error: "Preencha todos os dados para editar!"})
    }

  }
module.exports = alterValue;
