const Product = require('../models/Product')


module.exports.getAllProductService = async()=>{

    const product = await Product.find({});
    return product;
}


// save product in database 


module.exports.saveProduct = async(data)=>{

    const product = new Product(data);
    const result = await product.save();

    return result;
 
}


// update product 

module.exports.getUpdateProduct = async(id, data) =>{
    console.log("serid"+ id, data);
  const result = await  Product.updateOne({_id: id}, {$set:data});

  return result;
    
}


// many updates 

module.exports.bulkUpdateProductService = async(data)=>{

    const update = await Product.updateMany({_id:data.ids}, {$set:data.data},{runValidators:true});

    return update;
}



// delete product by product Id 

module.exports.deleteProductByIdService = async(id)=>{
    try{

        const result = await Product.deleteOne({_id: id});

    }catch(error){
        console.log(error)
    }
}