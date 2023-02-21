const express = require("express"); 
const app = express(); 
const bodyParcer = require('body-parser')
const addUser = require('./controlers/user/add')
const addProduct = require('./controlers/product/add');
const addMarket = require("./controlers/marketplace/add");
const addValues = require("./controlers/value/add");
const verificarEmail = require("./controlers/verificarEmail/verificarEmail");
const verifyProduct = require("./controlers/verefyProduct/verefy");
const VerifyUserLogin = require("./controlers/VerifyUserLogin/verefy");
const RenderProducts = require("./controlers/RenderProducts/render");
const deleteProduct = require("./controlers/deleteProduct/delete");
const alterValue = require("./controlers/alterValue/alter");
const RenderMarket = require("./controlers/RenderMarkets/render");

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
  app.post(
    '/verify/user', 
    verificarEmail
  )
  app.post(
    '/verify/product', 
    verifyProduct
  )
  app.post(
    '/verify/login',
    VerifyUserLogin
  )
  app.get(
    '/render/product',
    RenderProducts
  ),
  app.get(
    '/delete/product',
    deleteProduct
    )
  app.patch(
    '/alter/value',
    alterValue
  )

  app.get(
    '/render/markets',
    RenderMarket
  )
  
  app.listen(8081, function(){
    console.log("O seu servidor está rodando em ==> http://localhost:8081")
  });
