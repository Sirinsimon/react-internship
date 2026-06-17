import "../App.css";
import Nav from "../Components/Nav.jsx";
import Card from "../Components/Card.jsx";
import Footer from "../Components/Footer.jsx";

function Home() {
  let loggedIn = true;
  return (
    <>
      <Nav />

      <h1>{loggedIn ? "Welcome back!!!!" : "Please login"}</h1>
      
      <div style={{ display: "flex", justifyContent:"space-evenly"  }}>
        <Card name="Laptop" price="450000" />
        <Card name="Pen" price="10" />
        <Card name="Pencil" price="7" />
        

      </div>

      <Footer />
    </>
  );
}

export default Home;