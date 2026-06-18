import Profile from "./Pages/Profile"
import Home from "./Pages/Home"
import Card from "./Components/Card"
import Count from "./Pages/Count"
import Userlist from "./Components/Userlist"
import Generator from "./Components/Generator"
import Msg from "./Components/Msg"
import {Route, Routes} from "react-router-dom"


function App() {
  

  return (
    <>
      <Routes>
      <Route path ="/" element = {<Home/>}/>
        <Route path ="/Card" element = {<Card/>}/>
        <Route path ="/Profile" element = {<Profile/>}/>
        <Route path ="/count" element = {<Count/>}/>
        <Route path ="/user" element = {<Userlist/>}/>
        <Route path ="/generator" element = {<Generator/>}/>
        <Route path ="/msg" element = {<Msg/>}/>

          
    </Routes>
    </>
  )
}

export default App
