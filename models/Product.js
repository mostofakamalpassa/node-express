const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required: [true,"Please Provide a name for this product"],
        trim: true,
        unique: true,
        minLength:[3,"Name must be a least 3 characters"],
        maxLength:[100,"Name is too large"]

    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
        min:[0,"Price can not be negative"]
    },
    unit:{
        type:String,
        required: true,
        enum:{
            values:["kg","litre","pcs"],
            message:"unit value can not be {VALUE} must be kg/litre/pcs"
        }
    },
    quantity:{
        type:Number,
        required: true,
        min:[0,"quantity can not be negative"],
        validate:{
            validator:(value)=>{
                const isInteger = Number.isInteger(value);
                if(isInteger) {
                    return true;
                }else{
                    return false;
                }
                
            }
        },
        message:"Quantity must be an integer"
    },
    status:{
        type:String,
        required:true,
        enum:{
            values:['in-stock','out-of-stock','discontinued'],
            message:"status can not be {VALUE}"
        }
    },
    // supplier:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"Supplier"
    // },
    // categories:[
    //    {
    //     name:{
    //         type:String,
    //         required:true,
    //     },
    //     _id:mongoose.Schema.Types.ObjectId
    //    }
    // ]
},{timestamps:true})
// Schema ->Model ->Query

// make model 
const Product = mongoose.model('Product', productSchema);
module.exports = Product;