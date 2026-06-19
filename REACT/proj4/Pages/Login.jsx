import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { ColorRing } from 'react-loader-spinner';
import { motion } from "motion/react"
import {z} from "zod";
const loginSchema = z.object({
    email: z
        .string()
        .trim()
        .min(1, 'Email is required')
        .email('Invalid email'),

    password: z
        .string()
        .trim()
        .min(1, 'Password is required')
        .max(100, 'Password is too long'),
});

import './login.css';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const [Error, setError] = useState('');
    const [sucess, setSuccess] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setSuccess('');
        setError('');
        setLoading(true);

        const result = loginSchema.safeParse({
            email: email.trim(),
            password: password.trim(),
        });

        if (!result.success) {
            setError(result.error.issues[0]?.message || 'Validation failed');
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post(
                'https://sample-e-1.onrender.com/login',
                {
                    email: result.data.email,
                    password: result.data.password,
                }
            );
            const { token } = response.data;
            setSuccess('Login successful');
            localStorage.setItem('token', token);
            navigate('/');
            console.log(response);
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed');
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <>
            <div className="login-page">
                <div className="login-container">
                    <motion.div 
                        className="login-card"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                    {Error && (
                        <motion.div 
                            className="message-alert error-message"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {Error}
                        </motion.div>
                    )}
                    {sucess && (
                        <motion.div 
                            className="message-alert success-message"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {sucess}
                        </motion.div>
                    )}
                        <motion.div 
                            className="login-header"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <h1>Welcome Back</h1>
                            <p>Sign in to continue to your account</p>
                        </motion.div>

                        <motion.form 
                            className="login-form" 
                            onSubmit={(e) => handleLogin(e)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            <motion.div 
                                className="form-group"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4, duration: 0.4 }}
                            >
                                <label htmlFor="emailOrUsername">Username or Email</label>
                                <motion.input
                                    type="text"
                                    id="emailOrUsername"
                                    name="emailOrUsername"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your username or email"
                                    required
                                    whileFocus={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                />
                            </motion.div>

                            <motion.div 
                                className="form-group"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5, duration: 0.4 }}
                            >
                                <label htmlFor="password">Password</label>
                                <motion.input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    required
                                    whileFocus={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                />
                            </motion.div>

                            <motion.div 
                                className="form-options"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.4 }}
                            >
                                <label className="remember-me">
                                    <input type="checkbox" />
                                    <span>Remember me</span>
                                </label>
                                <Link to="/forgot-password" className="forgot-link">
                                    Forgot Password?
                                </Link>
                            </motion.div>

                            <motion.button 
                                type="submit" 
                                className="login-button" 
                                disabled={loading}
                                whileHover={!loading ? { scale: 1.1 } : {}}
                                whileTap={!loading ? { scale: 0.95 } : {}}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                                {loading ? (
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <ColorRing
                                            visible={true}
                                            height="30"
                                            width="30"
                                            ariaLabel="color-ring-loading"
                                            wrapperStyle={{}}
                                            wrapperClass="color-ring-wrapper"
                                            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                                        />
                                    </div>
                                ) : (
                                    'Sign In'
                                )}
                            </motion.button>
                        </motion.form>

                        <motion.div 
                            className="login-footer"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.4 }}
                        >
                            <p>
                                Don't have an account?{' '}
                                <Link to="/signup" className="signup-link">
                                    Sign Up
                                </Link>
                            </p>
                        
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;