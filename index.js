const express = require('express');
const app = express();
require('dotenv').config();
const msg = `api_key : ${process.env.API_KEY}\nsaludo: ${process.env.RESPONSE_DEFAULT}`;
app.get('/',(req,res) => {
  res.send(msg)
})
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("Servidor corriendo en el puerto ", port);
})