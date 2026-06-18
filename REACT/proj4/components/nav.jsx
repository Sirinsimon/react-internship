
import { Link, useNavigate } from 'react-router-dom';
import './comp.css';

function Navbar() {
    const navigate = useNavigate();

    const handleHomeClick = (e) => {
        if (window.location.pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleProductsClick = (e) => {
        e.preventDefault();

        const scrollToProducts = () => {
            const section = document.getElementById('products');
            if (section) {
                const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
                const top = section.getBoundingClientRect().top + window.scrollY - navbarHeight;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        };

        if (window.location.pathname === '/') {
            scrollToProducts();
        } else {
            navigate('/');
            setTimeout(scrollToProducts, 300);
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
                        <Link to="/" className="nav-link" onClick={handleProductsClick}>Products</Link>
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