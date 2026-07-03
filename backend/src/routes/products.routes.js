const express = require("express");
const {admin} = require("../middleware/adminMiddleware");
const {authUser} = require("../middleware/auth.middleware");
const {upload} = require('../middleware/file.middleware');

const router = express.Router();


/**
 * require all the product controllers here 
 */
const {getProductController, getProductById, createProductController, udpateProducts, deleteProducts} = require("../controllers/product.controller");
/**
 * @routes /api/products
 * @description if get then get the all products of user if post then the admin can post the products on the site
 * @access get and post both are Private
 * 
 */
router.route('/').get(getProductController).post(authUser,admin,upload('image'),createProductController)

/**
 * to get product by id upadate product and delete product
 */
router.route("/:id").get(getProductById).put(authUser,admin,upload('image'),udpateProducts).delete(authUser,admin,deleteProducts)


module.exports = router