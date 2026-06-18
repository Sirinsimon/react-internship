import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';

function Count() {

    const [count, setCount] = useState(0)

    const notify = () => toast("Wow so easy!");

    function increment() {
        setCount(count + 1)
        console.log(count)
    }
    function decrement() {
        setCount(count - 1)
        console.log(count)
    }
    return (
        <div>
            <h1>Count {count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={notify}>Notify!</button>
            <ToastContainer 
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                // transition={Bounce}
                 />
        </div>
    )
}


export default Count