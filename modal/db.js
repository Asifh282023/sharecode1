const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://asif28072001:Z8nauQCtWRUqMOVJ@cluster0.isxmexw.mongodb.net/",{
    dbName:"Sharecode"
});

const schema = new mongoose.Schema({
    title:String,
    data:String,
});

const modal = mongoose.model("Programs",schema);

module.exports=modal;
