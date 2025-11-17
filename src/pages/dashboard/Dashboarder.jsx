
import { use, useState } from "react"
const Dashboarder = () => {

    const [message, setMessage] = useState("hello margarita")
    const [counter, setCounter] = useState(0)
    return (
        <div>
            <h1>{message}</h1>
            <h2>counter </h2>
            <p className="fs-3">{counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>
            <button onClick={()=> setMessage("hey, how are you")}>Update Message</button>
        </div>
    )
}

export default Dashboarder;