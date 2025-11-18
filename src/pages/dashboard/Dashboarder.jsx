
import { useState } from "react"
const Dashboarder = () => {
    const [message, setMessage] = useState("hello margarita")
    const [counter, setCounter] = useState(0)
    const [todos, setTodos] = useState([]);
    const [item, setItem] = useState("");

    const addTodo = () => {
        // console.log(item)
        setTodos([...todos, { value: item, disabled: true }])
        setItem("")
        // console.log(todos)
    }

    const editTodo = (target) => {
        console.log(target)
        // target.parentNode.innerText = item
        // setTodos()
    }

    return (
        <div>
            <h1>{message}</h1>
            <h2>counter </h2>
            <p className="fs-3">{counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>
            <button onClick={() => setMessage("hey, how are you")}>Update Message</button>

            <section className="todo">
                <h1>Todo</h1>
                <input value={item} onChange={(e) => { setItem(e.target.value) }} type="text" />
                <button onClick={addTodo}>add Todo</button>
                <ul>
                    {
                        todos.map(({value, disabled}, i) => (
                            <li key={i}>
                            <input disabled={disabled} value={value} />
                                <button onClick={() => { 
                                    const oldTodos = [...todos]
                                    oldTodos.splice(i,1)
                                    setTodos(oldTodos)
                                 }} >Delete</button>
                                {/* <button onClick={(e) => {editTodo(e.target)}}>Edit Todo</button> */}
                            </li>
                        ))
                    }
                </ul>
            </section>
        </div>
    )
}

export default Dashboarder;