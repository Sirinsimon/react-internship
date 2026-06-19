import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { ColorRing } from 'react-loader-spinner';
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
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
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

                            <button type="submit" className="login-button" disabled={loading}>
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