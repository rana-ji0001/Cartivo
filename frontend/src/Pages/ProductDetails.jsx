import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { getProductById } from '../products/services/products.api';
import '../styles/productCard.css';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await getProductById(id)
                setProduct(data.product);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    const handleAddToCart = () => {
        if (product) {
            dispatch(addToCart({
                productId: product._id,
                name: product.name,
                price: product.price,
                imageUrl: product.imageUrl,
                qty: 1
            }));
            alert('Successfully added to your cart!');
        }
    };

    if (loading) return <div style={{ textAlign: 'center', margin: '100px', color: '#f97316' }}>Loading Product...</div>;
    if (!product) return <div style={{ textAlign: 'center', margin: '100px', color: '#ef4444' }}>Product Not Found</div>;

    return (
        <div
            className="product-detail-wrapper"
            style={{
                maxWidth: "1200px",
                margin: "40px auto",
                padding: "25px",
            }}
        >
            {/* Breadcrumb */}
            <div
                style={{
                    marginBottom: "10px",
                    fontSize: ".95rem",
                    color: "#9ca3af",
                }}
            >
                <Link
                    to="/"
                    style={{
                        color: "#8dc26f",
                        textDecoration: "none",
                        fontWeight: "600",
                    }}
                >
                    Home
                </Link>{" "}
                /
                <Link
                    to="/shop"
                    style={{
                        color: "#8dc26f",
                        textDecoration: "none",
                        fontWeight: "600",
                        marginLeft: "6px",
                    }}
                >
                    {" "}
                    Shop
                </Link>{" "}
                /
                <span style={{ marginLeft: "6px" }}>{product.category}</span> /
                <span
                    style={{
                        color: "#fff",
                        fontWeight: "600",
                        marginLeft: "6px",
                    }}
                >
                    {product.name}
                </span>
            </div>

            <div
                className="product-detail"
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "40px",
                    background: "rgba(255,255,255,.05)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,.08)",
                    borderRadius: "22px",
                    padding: "35px",
                    boxShadow:
                        "0 20px 60px rgba(0,0,0,.45), inset 0 1px 0 rgba(255,255,255,.08)",
                }}
            >
                {/* Image */}
                <div
                    className="detail-image-container"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="detail-image"
                        style={{
                            width: "100%",
                            maxWidth: "450px",
                            borderRadius: "20px",
                            objectFit: "cover",
                            boxShadow: "0 15px 40px rgba(0,0,0,.4)",
                            transition: ".3s",
                        }}
                    />
                </div>

                {/* Product Info */}

                <div
                    className="detail-info"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <span
                        style={{
                            display: "inline-block",
                            width: "fit-content",
                            padding: "6px 14px",
                            borderRadius: "999px",
                            background: "rgba(141,194,111,.12)",
                            color: "#8dc26f",
                            fontWeight: "600",
                            marginBottom: "18px",
                        }}
                    >
                        {product.category}
                    </span>
                    <h2
                        style={{
                            fontSize: "2.8rem",
                            color: "#fff",
                            marginBottom: "15px",
                        }}
                    >
                        {product.name}
                    </h2>

                    <h3
                        style={{
                            color: "#8dc26f",
                            fontSize: "2.3rem",
                            marginBottom: "25px",
                        }}
                    >
                        ₹{product.price.toFixed(2)}
                    </h3>

                    {/* Description */}

                    <div
                        style={{
                            marginBottom: "30px",
                            padding: "20px",
                            borderRadius: "15px",
                            background: "rgba(255,255,255,.03)",
                            border: "1px solid rgba(255,255,255,.06)",
                        }}
                    >
                        <h4
                            style={{
                                color: "#fff",
                                marginBottom: "12px",
                                fontSize: "1.1rem",
                            }}
                        >
                            Product Description
                        </h4>
                        <p
                            style={{
                                color: "#b5b5b5",
                                lineHeight: "1.8",
                            }}
                        >
                            {product.description}
                        </p>
                    </div>

                    {/* Stock */}

                    <div
                        style={{
                            marginBottom: "25px",
                        }}
                    >
                        <span
                            style={{
                                color: product.stock > 0 ? "#22c55e" : "#ef4444",
                                fontWeight: "600",
                                fontSize: "1rem",
                            }}
                        >
                            {product.stock > 0
                                ? `● In Stock (${product.stock} Available)`
                                : "● Out of Stock"}
                        </span>
                    </div>

                    {/* Button */}

                    <button
                        onClick={handleAddToCart}
                        className="shine-btn"
                        style={{
                            width: "100%",
                            padding: "18px",
                            fontSize: "1.1rem",
                        }}
                    >
                        🛒 Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;