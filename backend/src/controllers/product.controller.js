const productModel = require("../models/product.model");
const cloudinary = require("../config/cloudinary");



async function getProductController(req, res) {
    try {
        const products = await productModel.find({});
        return res.status(200).json({
            products
        })
    } catch (error) {
        return res.status(500).json({ message: "Server Error" });
    }

}
async function createProductController(req, res) {
    const { name, description, price, category, stock } = req.body;
    let imageUrl = '';
    try {
        if (req.file){ 
            const result = await cloudinary.uploader.upload(req.file.path);
            imageUrl = result.secure_url;
        }
        const product = new productModel()
        
    } catch (error) {
        
    }



}
async function getProductById(req, res) {
    try {
        const product = await productModel.findById(req.params.id);
        if (product) {
            return res.status(200).json({ message: "Fetched product successfully" });
        } else {
            return res.status(400).json({ message: "Product Not found" });
        }
    } catch (error) {
        return res.status(400).json({ message: "Erro fetching product" })

    }
}
async function udpateProducts(params) {

}
async function deleteProducts(params) {

}

module.exports = { getProductController, createProductController, getProductById, udpateProducts, deleteProducts }