const express = require("express");
const router = express.Router();
const { authUser } = require("../middleware/auth.middleware");
const { admin } = require("../middleware/adminMiddleware");

/**
 * @requires all the controller here
 */
const analyticsController = require("../controllers/analytics.controller");


/**
 * @Router get api/analytics/
 * @description to get the stats only admin
 * @access Admin private
 */
router.get("/", authUser, admin, analyticsController.getAdminStatsController);



module.exports = router