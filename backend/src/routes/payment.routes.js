const express = require("express");
const router = express.Router();


/**
 * expprt all the controllers here 
 */
const paymentController = require("../controllers/payment.controller.js")



/**
 * @router Post api/payment/order
 * @description to create the payment order
 * @access Private 
 */
router.post("/order", paymentController.createOrderConrtoller);



/**
 * @router Post api/payment/verify
 * @description to verify the payment
 * @access Private 
 */
router.post("/verify", paymentController.verifyPaymentController);


module.exports = router