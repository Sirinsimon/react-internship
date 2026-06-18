import Card from "../Components/Card";
import { Link } from "react-router-dom";
import Userlist from "../Components/Userlist";

function Home() {

    let loggedIn = false;


    let products = [
        { name: "lap", price: "65000", details: "AMD Ryzen 5" },
        { name: "Phone", price: "40000", details: "Vivo R15" },
        { name: "Headphone", price: "1500", details: "realme t100" }
    ]
    return (
        <>
            
            <h1>
                {loggedIn ? "Welcome Back!..." : "Please Login"}
            </h1>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
                {
                    products.map((product,index)=>(
                     <Card key={index}
                        name ={product.name} 
                        price={product.price}
                        details={product.details}/>
                    ))
                }
            </div>
            <div>
             <Link to='./Count'>Count</Link>
             <Link to='/User'>user</Link>
             <Link to ='/msg'>Message</Link>
            </div>
        </>
    )
}

export default Home