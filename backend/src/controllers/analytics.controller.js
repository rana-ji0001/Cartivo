const orderModel = require("../models/order.model");
const productModel = require("../models/product.model");
const userModel = require("../models/user.model");


async function getAdminStatsController(req, res) {
    try {
        const totalUsers = await userModel.countDocuments({ role: "user" });
        const totalOrders = await orderModel.countDocuments();
        const totalProduct = await productModel.countDocuments();

        const orders = await orderModel.find({});
        const totalRevenueData = orders.reduce((acc, order) => acc + order.totalAmount, 0);
        return res.status(200).json({
            totalUsers,
            totalOrders,
            totalProduct,
            totalRevenue:totalRevenueData
        });

    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}


module.exports = {getAdminStatsController}