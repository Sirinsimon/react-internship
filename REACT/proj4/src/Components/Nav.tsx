import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  )
}

export default Nav
