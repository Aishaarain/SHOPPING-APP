import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  
  return (
    <nav className="navbar">
      <h3 className="logo">Redux Toolkit</h3>
    <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/Cart" className="nav-link cart-icon-container">
            {cartItems.length > 0 && (
              <span className="cart-badge"></span>
            )}
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>

      </div>
    </nav>
  );
};

export default Navbar;
