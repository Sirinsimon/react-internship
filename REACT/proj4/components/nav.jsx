
import { Link } from 'react-router-dom';
import './comp.css';

function Navbar() {
    const handleHomeClick = (e) => {
        if (window.location.pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-logo">
                    <Link to="/">MyApp</Link>
                </div>
                
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/" className="nav-link" onClick={handleHomeClick}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/products" className="nav-link">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/addproduct" className="nav-link">Add Product</Link>
                    </li>
                </ul>

                <div className="nav-auth">
                    <Link to="/login" className="nav-btn login-btn">Login</Link>
                    <Link to="/signup" className="nav-btn signup-btn">Sign Up</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar