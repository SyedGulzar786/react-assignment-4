
import { useState } from "react"
const Dashboarder = () => {
    const [message, setMessage] = useState("hello margarita")
    const [counter, setCounter] = useState(0)
    const [todos, setTodos] = useState([]);
    const [item, setItem] = useState("");
    const addTodo = () => {
        setTodos([...todos, { value: item, disabled: true }])
        setItem("")
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
                <button onClick={() => {
                    setTodos([])
                }}
                >Delete All
                </button>

                <ul>
                    {
                        todos.map(({ value, disabled }, i) => (
                            <li key={i}>
                                <input disabled={disabled} defaultValue={value} />
                                <button onClick={() => {
                                    const oldTodos = [...todos]
                                    oldTodos.splice(i, 1)
                                    setTodos(oldTodos)
                                    console.log(todos, value)
                                }} >Delete</button>

                                <button onClick={(e) => {
                                    const oldTodos = [...todos]
                                    oldTodos[i].disabled = !oldTodos[i].disabled
                                    oldTodos[i].value = oldTodos[i].value
                                    setTodos(oldTodos)
                                    disabled ? e.target.innerText = "Update" : e.target.innerText = "Edit"
                                }}>Edit</button>

                            </li>
                        ))
                    }
                </ul>
            </section>
        </div>
    )
}

export default Dashboarder;