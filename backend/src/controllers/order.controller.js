const orderModel = require("../models/order.model");
const { get } = require("../routes/auth.routes");
const sendEmail = require("../utils/sendEmail");


/**
 * @Rroute Post api/orders/
 * @description to add the order 
 * @access Private
 */
async function addOrderItemsController(req, res) {
    try {
        const { items, paymentId, address, totalAmount } = req.body;
        if (!items && items.length === 0) {
            return res.status(400).json({ message: "No items found" });
        } else {
            const order = new orderModel({
                userId: req.user._id,
                items,
                totalAmount,
                address,
                paymentId
            });
            const createdOrder = await order.save();

            // Send Order Confirmation Email
            const message = `
                <h2>Order Confirmation</h2>
                <p>Hello ${req.user.username},</p>
                <p>Your order has been successfully placed! Order ID: <strong>${createdOrder._id}</strong></p>
                <p>Total Amount Paid: $${totalAmount.toFixed(2)}</p>
                <p>It will be shipped to: ${address.street}, ${address.city}</p>
                <p>Thank you for shopping with Cartivo!</p>`;

            try {
                await sendEmail({
                    email: req.user.email,
                    subject: "Cartivo: Order Confirmation",
                    message
                });
            } catch (err) {
                console.error("Email Error:", err.message);
            }

            return res.status(201).json({ message: "Order Created Successfully",order:createdOrder});
        }

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}

/**
 * @Rroute Get api/orders/myOrders
 * @description to add the order 
 * @access Private
 */

async function getMyOrderController(req, res) {
    try {
        const orders = await orderModel.find({ userId: req.user._id });
        return res.status(200).json({
            message: "Here are your orders",
            orders
        })
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}
/**
 * @Rroute Get api/orders/
 * @description to get the all orders
 * @access Private admin
 */
async function getOrdersController(req, res) {
    try {
        const orders = await orderModel.find({}).populate('userId', '_id username email');
        return res.status(200).json({
            message: "Here are the all orders",
            orders
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}
/**
 * @Rroute PUT api/orders/updateOrder
 * @description to update the status of that order
 * @access Private
 */
async function updateOrderController(req, res) {
    try {
        const order = await orderModel.findById(req.params.id);
        if (order) {
            order.status = req.body.status || order.status;
            const updatedOrder = await order.save();
            return res.status(200).json({ message: "Order Status Updated Successfully", updatedOrder });
        } else {
            return res.status(404).json({ message: "Can't Find this order" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}




module.exports = { addOrderItemsController, getMyOrderController, getOrdersController, updateOrderController }