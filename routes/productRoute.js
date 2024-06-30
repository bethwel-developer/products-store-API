
const router = require ("express").Router();
const Product= require ("../models/productsmodel")


router.post("/createproduct", async (req, res) => {
    
    try {
        const createdProduct = await Product.create( req.bod y)
        res.status(200).json(createdProduct);
    } catch (err) {
       res.status(500).json(err) 
    }
})

//get all products
router.get("/products", async (req, res) => {
    
    try {
        const allProducts = await Product.find()
        res.status(200).json(allProducts);
    } catch (err) {
       res.status(500).json(err) 
    }
})
//get one product
router.get("/:id", async (req, res) => {
    
    try {
        const getProduct = await Product.findById(req.params.id)
        res.status(200).json(getProduct);
    } catch (err) {
       res.status(500).json(err) 
    }
})

//update product
router.patch("/:id", async (req, res) => {
    
    try {
        const updatedProduct = await Product.findOneAndUpdate( req.params._id,
            req.body,{
                new:true,
                runValidators:true,
                overWrite:true
              })
        res.status(200).json(updatedProduct);
    } catch (err) {
       res.status(500).json(err) 
    }
})

 
//delete product
router.delete("/:id", async (req, res) => {
    try {
        const deletedProduct = await Product.findOneAndDelete( req.params._id)
        res.status(200).json(deletedProduct);
    } catch (err) {
       res.status(500).json(err) 
    }
})

module.exports= router
