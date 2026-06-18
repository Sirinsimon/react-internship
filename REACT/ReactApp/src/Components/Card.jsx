

function Card(props) {
    function buyProduct(){
        alert("Product added to cart")
    }
  return (
    <div style={{ backgroundColor:"grey", width:"300px",height:"500px" }}>
      <h2>{props.name}</h2>
      <h3>₹{props.price}</h3>
      <h3>{props.details}</h3>
      <button onClick={buyProduct}>Buy Now</button>  
    </div>
  )
}

export default Card