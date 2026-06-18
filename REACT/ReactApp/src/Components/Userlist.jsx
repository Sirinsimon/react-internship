import {useState, useEffect } from "react"
import axios from "axios"

function Userlist() {
    const [users,setUsers] = useState([])
    const getUsers = async()=>{
        try{
            const response = await axios.get("https://jsonplaceholder.typicode.com/users")
             setUsers(response.data)
             console.log(response.data)

   
        }
        catch(error){
            console.log(error)
        }
    }
    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div>
            <h1>React Dev Team Members</h1>

            {
                users.map(function(user,index){
                    return<div key={user.id} style ={{border:"1px solid black"}}>
                    <p>Name :{user.name}</p>
                    <p>Email :{user.email}</p>
                    <p>Website :{user.website}</p>
                    <p>City :{user.address.city}</p>
                    </div>
                })
            }
            
        </div>
    )
}

export default Userlist