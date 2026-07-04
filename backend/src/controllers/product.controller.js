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
        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path);
            console.log(result)
            imageUrl = result.secure_url;
        }
        const product = new productModel({
            name,
            description,
            price,
            category,
            stock,
            imageUrl,

        });
        const savedProduct = await product.save();
        return res.status(201).json({
            message: "Product is created successfully",
            savedProduct
        });

    } catch (error) {
        console.error("Cloudinary Error:", error);
        return res.status(500).json({
            message: error.message,
            error
        });

    }



}
async function getProductById(req, res) {
    try {
        const product = await productModel.findById(req.params.id);
        if (product) {
            return res.status(200).json({ message: "Fetched product successfully", product });
        } else {
            return res.status(400).json({ message: "Product Not found" });
        }
    } catch (error) {
        return res.status(400).json({ message: "Erro fetching product" })

    }
}
async function udpateProducts(req, res) {
    const { name, description, price, category, stock } = req.body;
    const product = await productModel.findById(req.params.id);
    if (product) {
        product.name = name || product.name;
        product.description = description || product.description;
        product.price = price || product.price;
        product.category = category || product.category;
        product.stock = stock || product.stock;
        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path);
            console.log(result)
            imageUrl = result.secure_url;
        }
        const udpateProduct = await product.save();
        return res.status(201).json({ message: "Product updated successfully", udpateProduct });
    }

}
async function deleteProducts(req, res) {
    try {
        const product = await productModel.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        return res.status(200).json({
            message: "Product removed successfully"
        });

    } catch (error) {
        return res.status(500).json({ message: 'error finding product' });
    }
}

module.exports = { getProductController, createProductController, getProductById, udpateProducts, deleteProducts }