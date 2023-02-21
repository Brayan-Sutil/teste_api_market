const market = require('../../models/Marketplace')

function RenderMarket(req, res){
    market.findAll({
  }).then(function(data){
    res.send({data})
  })
}
module.exports = RenderMarket;