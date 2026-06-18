
import { Routes, Route } from 'react-router-dom'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'

function App() {
  return (
    <div className="app-layout">
      <Nav />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
