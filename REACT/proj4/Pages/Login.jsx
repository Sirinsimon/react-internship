import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

import './login.css';
import Navbar from '../components/nav';

function LoginPage() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    const [Error,setError] = useState('');
    const [sucess,setSuccess] = useState('');

    const handleLogin = async (e) =>{
        setSuccess('')
        setError('')
        e.preventDefault('')
        try{
            const response  = await axios.post("https://sample-e-1.onrender.com/login",
                {
                    email,
                    password
                }
            );
            const {token} = response.data;
            setSuccess("Login:sucessfull");
            localStorage.setItem("token",token);
            navigate('/');
            console.log(response)
        }catch (err){
            setError(err.response?.data?.message || "Login failed")
        }
    }
    
    return (
        <>
            <div className="login-page">
                <div className="login-container">
                    <div className="login-card">
                    {Error && (
                        <div className="message-alert error-message">
                            {Error}
                        </div>
                    )}
                    {sucess && (
                        <div className="message-alert success-message">
                            {sucess}
                        </div>
                    )}
                        <div className="login-header">
                            <h1>Welcome Back</h1>
                            <p>Sign in to continue to your account</p>
                        </div>

                        <form className="login-form" onSubmit={(e) => handleLogin(e)}>
                            <div className="form-group">
                                <label htmlFor="emailOrUsername">Username or Email</label>
                                <input
                                    type="text"
                                    id="emailOrUsername"
                                    name="emailOrUsername"
                                    onChange={(e)=> setEmail(e.target.value)}
                                    placeholder="Enter your username or email"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    onChange={(e)=> setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>

                            <div className="form-options">
                                <label className="remember-me">
                                    <input type="checkbox" />
                                    <span>Remember me</span>
                                </label>
                                <Link to="/forgot-password" className="forgot-link">
                                    Forgot Password?
                                </Link>
                            </div>

                            <button type="submit" className="login-button">
                                Sign In
                            </button>
                        </form>

                        <div className="login-footer">
                            <p>
                                Don't have an account?{' '}
                                <Link to="/signup" className="signup-link">
                                    Sign Up
                                </Link>
                            </p>
                        
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;