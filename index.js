const express = require("express");
const cors =require("cors");
const router = require("./router/code");
const path = require('path');




//server
const app = express();


//middleware
app.use(cors());
app.use(express.static(path.resolve(__dirname,"build")));
app.use(express.json());
app.use("/api",router);
app.use('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,"build","index.html"));
})


app.listen(8080, () => {
    console.log('listening to port 8080')
  })
