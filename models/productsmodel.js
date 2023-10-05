



const  mongoose = require ("mongoose");

const ProductSchema = new mongoose.Schema({
name:{
    type:String,
    required:true,
},
price:{
    type:Number,
    required:true,
},
company:{
    type:String,
},
rating:{
    type:Number,
}
},
{timestamps:true})


module.exports = mongoose.model("Products",ProductSchema )
