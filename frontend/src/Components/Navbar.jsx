
import { Link } from 'react-router'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { useAuth } from '../Hooks/auth/auth.hooks';
import '../Styles/navbar.css'

const Navbar = () => {
  const {loading, handleLogout, user} = useAuth();
  const navigate = useNavigate();
  // const cartItems = useSelector((state) => state.cart.cartItems);

  const handleClick = async() => {
    handleLogout();
    navigate("/login");

  }


  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        <Link to="/"><img src='/logo.png' style={{ height: '36px', width: '36px', borderRadius: '8px', objectFit: 'cover', filter: 'drop-shadow(0 2px 8px rgba(249, 115, 22, 0.35))' }} />Cartivo</Link>
      </div>
      <ul className='navbar-links'>
        <li><Link to="/shop">Shop</Link></li>
        {/* <li><Link to="/cart">Cart ({cartItems.length})</Link></li> */}
        {user ? (
          <>
            <li><Link to="/profile">Hi, {user.username}</Link></li>

            {user.role === "admin" && <li><Link to="/admin">Admin</Link></li>}
            <li>
              <button onClick={handleClick} className="logout-btn">Logout</button>
            </li>
          </>
        ) : <li><Link to="/login">Login</Link></li>}
      </ul>
    </nav>
  )
}

export default Navbar
