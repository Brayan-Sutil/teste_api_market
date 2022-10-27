const express = require("express"); 
const app = express(); 
const bodyParcer = require('body-parser')
const addUser = require('./controlers/user/add')
const addProduct = require('./controlers/product/add');
const addMarket = require("./controlers/marketplace/add");
const addValues = require("./controlers/value/add");
const deleteProduct = require("./controlers/deleteProduct/delete");
const verificarEmail = require("./controlers/renderUser/render");
const verifyProduct = require("./controlers/verefyProduct/data");

// Config   
  //Body Parcer
    app.use(bodyParcer.urlencoded({extended: false}))
    app.use(bodyParcer.json())

//Rotas
  // envia para beck ende POST
  app.post(
    '/user/add', 
    addUser
  )
  app.post(
    '/product/add',
    addProduct
  )
  app.post(
    '/market/add',
    addMarket
  )
  app.post(
    '/values/add',
    addValues
  )
  app.put(
    '/values/add',
    addValues
  )
  // app.delete(
  //   '/user/delete/:id',
  //   deleteUser
  // )
  // app.delete(
  //   '/delete/Product',
  //   deleteProduct
  // )

  app.post(
    '/verify/user', 
    verificarEmail
  )

  app.post(
    '/verify/product', 
    verifyProduct
  )

  app.get(
    '/products', 
    function(req, res){
      const exemplo = [
        {
          id_mercado: 1,
          id: 1,
          nome: "leite",
        },
        {
          id_mercado: 1,
          id: 2, 
          nome: "Açucar",
        },
        {
          id_mercado: 1,
          id: 3,
          nome: "Maça",
        },
        {
          id_mercado: 1,
          id: 4,
          nome: "Leite",
        }
      ]
      res.send({success: true, data: exemplo})
  })



  app.listen(8081, function(){
    console.log("O seu servidor esta rodando nessa rota ==> http://localhost:8081")
  })
