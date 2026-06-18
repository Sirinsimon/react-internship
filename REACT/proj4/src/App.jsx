
import Navbar from '../components/nav.jsx'
import Footer from '../components/footer.jsx'
import LoginPage from '../Pages/Login.jsx'
import SignupPage from '../Pages/Signup.jsx'
import HomePage from '../Pages/Home.jsx'
import ProductsPage from '../Pages/Products.jsx'
import {Routes,Route} from 'react-router-dom'


function App() {
  return(
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/login" element = {<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      <Footer />
    </>
  )
}
export default App