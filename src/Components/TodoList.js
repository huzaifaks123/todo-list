//import styles here
import styles from "../styles/TodoList.module.css"

// import necessory hooks
import { useEffect } from "react"

// import useful hooks from react-redux
import { useDispatch, useSelector } from "react-redux";

// import required actions and selector from reducers
import { caution, notify, warning } from "../Redux/Reducer/notificationReducer";
import { getTodoAsynkThunk, todoSelector, toggleTodoAsynkThunk, removeTodo, toggleStatus } from "../Redux/Reducer/todoReducer"

// create TodoList component
export default function TodoList() {
    
    // create var to dispatch actions
    const dispatch = useDispatch()
    
    // destructure necessory state
    const { todos } = useSelector(todoSelector);
    
    // fetch API data on component mount
    useEffect(() => {
        dispatch(getTodoAsynkThunk())
    }, [])

    // function to remove task here
    function handleRemove(todo) {
        dispatch(removeTodo(todo.title))
        if (todo.completed) {
            dispatch(notify("Task Removed Successfully"))
        } else {
            dispatch(warning("Caution!! Incomplete Task removed"))
        }
    }

    // function to toggle status here 
    function handleStatus(todo) {
        console.log(todo.id)
        dispatch(toggleStatus(todo.title))
        dispatch(toggleTodoAsynkThunk(todo))
        if (todo.completed) {
            dispatch(caution("Caution!! Task is Pending"))
        } else {
            dispatch(notify("Hurray!! Task Completd Successfully"))
        }
    }

    // return list here
    return (
        <div className={styles.listContainer}>
            {todos.map((todo, index) => (
                <div className={styles.list} key={index}>
                    <div className={styles.text}>{todo.title}</div>
                    <div className={styles.btnContainer}>
                        <div className={styles.toggleButton} onClick={() => handleStatus(todo)}><img className={styles.img} src={todo.completed ? "https://cdn-icons-png.flaticon.com/128/189/189677.png" : "https://cdn-icons-png.flaticon.com/128/7704/7704975.png"}></img></div>
                        <div className={styles.removeButton} onClick={() => handleRemove(todo)}><img className={styles.img} src="https://cdn-icons-png.flaticon.com/128/1828/1828843.png"></img></div>
                    </div>
                </div>
            ))}
        </div>
    )
}