const crypto = require("crypto");
const instance = require("../config/razorpay");


/**
 * @router Post api/payment/order
 * @description to create the payment order
 * @access Private 
 */
async function createOrderConrtoller(req, res) {
    try {
        const options = {
            amount: req.body.amount * 100,
            currency: "INR",
            receipt: crypto.randomBytes(10).toString("hex")
        }
        const order = await instance.orders.create(options);
        return res.stauts(200).json({ message: "Payment Was Successfull", order });

    } catch (error) {
        return res.stauts(500).json({ message: error.message });
    }
}


/**
 * @router Post api/payment/verify
 * @description to verify the payment
 * @access Private 
 */
async function verifyPaymentController(req, res) {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
        const sign = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSign = crypto.createHmac("rana12", process.env.RAZORPAY_SECRET)
            .update(sign.toString())
            .digest("hex");

        if (razorpay_signature === expectedSign) {
            return res.status(200).json({ message: "Payment verified successfully" });
        } else {
            return res.status(400).json({ message: "Invalid signature sent!" });
        }
    } catch (error) {
        return res.status(500).send(error);
    }

}


module.exports = {createOrderConrtoller, verifyPaymentController}