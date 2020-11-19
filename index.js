const express = require('express');
const app = express();
app.get('/',(req,res) => {
  res.send("Hola mundo desde Nodejs")
})
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("Servidor corriendo en el puerto ", port);
})