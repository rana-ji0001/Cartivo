const express = require("express");
const router = express.Router();
const {authUser} = require("../middleware/auth.middleware");
const {admin} = require("../middleware/adminMiddleware");


/**
 * @controller require all the controllers here
 */
const orderController = require("../controllers/order.controller");


/**
 * @route /api/orders/
 * @description to get the order details here in this route
 * @rana-ji0001 this is my githubID
 * @access private
 */
router.route("/").post(authUser, orderController.addOrderItemsController).get(authUser,admin,orderController.getOrdersController);

/**
 * @route /api/orders/myOrders
 * @description to get the order of that user and the update the status of the order 
 * @rana-ji0001 this is my githubID
 * @access private
 */
router.route("/myOrders").get(authUser,orderController.getMyOrderController)

/**
 * @route api/orders/:id/status
 * @description to update the user controller 
 */

router.route("/:id/status").post(authUser,admin,orderController.updateOrderController)

module.exports = router