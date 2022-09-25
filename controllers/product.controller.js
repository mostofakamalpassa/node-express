const Product = require('../models/Product')
const productService = require('../service/product.services')

module.exports.SaveProduct = async(req, res, next)=>{
    try{
    //  const product = new Product(req.body);
    //  const result = await product.save();
        
    const result = await productService.saveProduct(req.body);

      console.log();
      res.status(200).json({message:"success", data: result});
    }catch(error){
     console.log(error);
     res.status(400).json({message:"faild",data: error})
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

module.exports.getUpdateProductById = async (req, res, next)=>{
    try{
        const {id} = req.params;
        console.log(id, req.body);
    const result = await productService.getUpdateProduct(id, req.body);

    res.status(200).json({
        status:'success',
        data:result
    })
    }catch(error){
        res.status(400).json({
            status:'failed',
            data:"update data can not find"
        })
    }

}



module.exports.bulkProductUpdateController = async(req, res, next)=>{

    try{
        console.log(req.body);
        const result = await productService.bulkUpdateProductService(req.body);
        res.status(200).json({"message":"success","data":result})
    }catch(error){
        next(error)
    }


}

// delete product 

module.exports.deleteProductByIdController = async(req, res, next)=>{
    
    try{
        const {id} = req.params;
        const result = await productService.deleteProductByIdService(id);
        
        res.status(200).json({"status":"success", "data":"delete has been successful"})
    }catch(error){
        next(error);
    }
}