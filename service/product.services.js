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