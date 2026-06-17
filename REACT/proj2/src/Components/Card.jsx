import React from 'react'

function Card(props) {
  return (
    <div>
        <div style={{backgroundColor:"gray",height:"400px",width:"300px"}}> 
            <h1 style={{color:"white"}}> {props.name}</h1>
            <h2 style={{color:"white"}}> {props.price}</h2>
        </div>
    </div>
  )
}
export default Card
