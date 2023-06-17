
const modal = require("../modal/db");
const addCode= async(req,res)=>{

  const {title,data }=req.body;
 
const results= await modal.create({title,data});
  res.send(results).status(200);

}
const getCode = async(req,res)=>{
  
  let results = await modal.find({});
  res.send(results).status(200);
  }
  const delete_code = async(req,res)=>{
  const tit=req.params.title;
    await modal.deleteOne({title:tit});
    res.status(200);
  }

module.exports = { addCode,getCode,delete_code };