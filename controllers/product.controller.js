const Product = require('../models/Product')
const productService = require('../service/product.services')

module.exports.SaveProduct = async(req, res, next)=>{
    try{
    //  const product = new Product(req.body);
    //  const result = await product.save();
        
    const result = await productService.saveProduct(req.body);

      console.log(result);
      res.send("it is working ");
    }catch(error){
     console.log(error);
    }
 }


 module.exports.getAllProduct = async(req, res, next)=>{
    try{
        // const product = await Product.find({});
        const products = await productService.getAllProductService();
        res.status(200).json({
            status:'success',
            data:products
        })

    }catch(error){
        res.status(400).json({
            status:'faild',
            data:"data can not get"
        })
    }
}