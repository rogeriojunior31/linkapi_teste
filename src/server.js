const express = require("express");
 require("./jobs/deal");

const app = express();

app.use(express.json());


app.listen(3333,()=>{
  console.log("server on")
});



