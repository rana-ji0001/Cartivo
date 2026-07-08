const express = require('express');
const cors = require("cors");
const cookieParser = require('cookie-parser');


const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));


/**
 * require all the routes here 
 * 
 */
const authRouter = require('./routes/auth.routes');
const productRouter = require('./routes/products.routes');
const paymentRouter = require('./routes/payment.routes');
const orderRouter = require('./routes/orders.routes');
const analystRouter = require('./routes/analytics.routes');


/**
 * use all the routes here
 */
app.use('/api/auth', authRouter)
app.use('/api/products', productRouter)
app.use('/api/payment', paymentRouter)
app.use('/api/orders', orderRouter)
app.use('/api/analytics', analystRouter)



module.exports = app;