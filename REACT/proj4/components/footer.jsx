import { Link } from 'react-router-dom';
import './comp.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3 className="footer-title">MyApp</h3>
                    <p className="footer-description">
                        Building amazing experiences for our users. 
                        Your trusted platform for all your needs.
                    </p>
                </div>

                <div className="footer-section">
                    <h4 className="footer-heading">Quick Links</h4>
                    <ul className="footer-links">
                        <li><Link to="/">Home</Link></li>
                        
                    </ul>
                </div>

               

                
            </div>

            <div className="footer-bottom">
                <p>&copy; {currentYear} MyApp. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer