import { Link } from 'react-router-dom'
import './Signup.css'

function Signup() {
  return (
    <section className="auth-page">
      <div className="auth-card">
        <h2>Create Account</h2>
        <p className="auth-subtitle">Sign up to get started</p>

        <form className="auth-form">
          <label>
            Full Name
            <input type="text" placeholder="Enter your full name" />
          </label>

          <label>
            Email
            <input type="email" placeholder="Enter your email" />
          </label>

          <label>
            Password
            <input type="password" placeholder="Create a password" />
          </label>

          <label>
            Confirm Password
            <input type="password" placeholder="Re-enter your password" />
          </label>

          <button type="submit">Signup</button>
        </form>

        <p className="auth-toggle">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </section>
  )
}

export default Signup
