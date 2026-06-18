import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
  return (
    <section className="auth-page">
      <div className="auth-card">
        <h2>Welcome Back</h2>
        <p className="auth-subtitle">Login to your account</p>

        <form className="auth-form">
          <label>
            Email
            <input type="email" placeholder="Enter your email" />
          </label>

          <label>
            Password
            <input type="password" placeholder="Enter your password" />
          </label>

          

          <button type="submit">Login</button>
        </form>

        <p className="auth-toggle">
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </section>
  )
}

export default Login
