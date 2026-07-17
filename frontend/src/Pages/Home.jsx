import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { getAllProducts } from '../products/services/products.api'
import ProductCard from '../Components/ProductCard'


const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getAllProducts();
        setProducts(data.products.slice(0, 4));
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  },[]);
  return (
    <div className="home">
      <div className='hero-banner'>
        <h1>Welcome to Cartivo</h1>
        <p>Discover the best products with shocking prices</p>
      </div>
      <h2>Featured Products</h2>
      {loading ? (
        <main><h1>Loading....</h1></main>
      ):(
        <div className='product-grid'>
          {
            products.map((product) => (
              <ProductCard key={product._id} product={product}/>
            ))
          }
        </div>
      )}
    </div>
  );
}

export default Home
