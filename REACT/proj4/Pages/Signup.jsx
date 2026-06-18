import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from "../components/nav";
import Footer from "../components/footer";
import './signup.css';

function SignupPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Basic password match validation
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        console.log('Signup Data:', formData);
        // Add your signup logic here
        alert(`Account created for: ${formData.username}`);
        navigate('/');
    };

    return (
        <>
            <div className="signup-page">
                <div className="signup-container">
                    <div className="signup-card">
                        <div className="signup-header">
                            <h1>Create Account</h1>
                            <p>Sign up to get started with your account</p>
                        </div>

                        <form className="signup-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    placeholder="Choose a username"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Create a password"
                                    required
                                    minLength="6"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="Re-enter your password"
                                    required
                                    minLength="6"
                                />
                            </div>

                            <div className="form-terms">
                                <label className="terms-checkbox">
                                    <input type="checkbox" required />
                                    <span>
                                        I agree to the{' '}
                                        <Link to="/terms" className="terms-link">
                                            Terms of Service
                                        </Link>{' '}
                                        and{' '}
                                        <Link to="/privacy" className="terms-link">
                                            Privacy Policy
                                        </Link>
                                    </span>
                                </label>
                            </div>

                            <button type="submit" className="signup-button">
                                Create Account
                            </button>
                        </form>

                        <div className="signup-footer">
                            <p>
                                Already have an account?{' '}
                                <Link to="/login" className="login-link">
                                    Sign In
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignupPage;