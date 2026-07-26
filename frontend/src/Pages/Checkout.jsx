import React, { useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { clearCart } from '../Redux/cartSlice';
import { verifyPayment, createOrder } from '../Api/payment.api';
import { createOrderInDb } from '../Api/order.api'
import '../Styles/checkout.css'

const Checkout = () => {
  const { user } = useContext(AuthContext);

  const cartItems = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [address, setAddress] = useState({
    fullName: "",
    street: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const handlePayment = async () => {
    try {
      // Create Razorpay Order
      const order = await createOrder(totalPrice);

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY,
        amount: order.amount,
        currency: order.currency,
        name: "Cartivo",
        description: "Order Payment",
        order_id: order.id,
        handler: async function (response) {
          try {
            // Verify Razorpay Payment
            await verifyPayment(response);

            // Save Order in Database
            await createOrderInDb({
              items: cartItems,
              totalAmount: totalPrice,
              address,
              paymentId: response.razorpay_payment_id,
            });

            dispatch(clearCart());

            navigate("/ordersuccess");
          } catch (error) {
            console.error(error);

            alert(
              error.response?.data?.message ||
                "Payment verification failed."
            );
          }
        },

        prefill: {
          name: address.fullName, 
          email: user?.email,
          contact: "9999999999",
        },

        theme: {
          color: "#404e3b",
        },
      };
      const razorpay = new window.Razorpay(options);


      razorpay.open();
    } catch (error) {
      console.error(error);

      const message = error.response?.data?.message;

      if (message === "Razorpay keys unconfigured") {
        const fallback = window.confirm(
          "Razorpay is not configured. Use Student Bypass Mode?"
        );

        if (fallback) {
          return bypassPayment();
        }
      }

      alert(message || "Payment initialization failed.");
    }
  };

  const bypassPayment = async () => {
    try {
      await createOrderInDb({
        items: cartItems,
        totalAmount: totalPrice,
        address,
        paymentId: "bypass_txn_" + Date.now(),
      });

      dispatch(clearCart());

      navigate("/ordersuccess");
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Unable to create order."
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user) {
      alert("Please login first");

      navigate("/login");

      return;
    }

    handlePayment();
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <div className="checkout-content">
        <form onSubmit={handleSubmit} className="shipping-form">
          <h3>Shipping Address</h3>

          <input
            type="text"
            placeholder="Full Name"
            required
            value={address.fullName}
            onChange={(e) =>
              setAddress({
                ...address,
                fullName: e.target.value,
              })
            }
          />

          <input
            type="text"
            placeholder="Street"
            required
            value={address.street}
            onChange={(e) =>
              setAddress({
                ...address,
                street: e.target.value,
              })
            }
          />

          <input
            type="text"
            placeholder="City"
            required
            value={address.city}
            onChange={(e) =>
              setAddress({
                ...address,
                city: e.target.value,
              })
            }
          />

          <input
            type="text"
            placeholder="Postal Code"
            required
            value={address.postalCode}
            onChange={(e) =>
              setAddress({
                ...address,
                postalCode: e.target.value,
              })
            }
          />

          <input
            type="text"
            placeholder="Country"
            required
            value={address.country}
            onChange={(e) =>
              setAddress({
                ...address,
                country: e.target.value,
              })
            }
          />

          <div className="checkout-summary">
            <h4>Total to Pay: ₹{totalPrice.toFixed(2)}</h4>

            <button type="submit" className="btn">
              Pay Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;