//import styles here
import styles from "../styles/TodoForm.module.css"

// import necessory hooks
import { useState, useRef } from "react";

// import useful hooks from react-redux
import { useDispatch, useSelector } from "react-redux";

// import required actions and selector from reducers
import { notify } from "../Redux/Reducer/notificationReducer";
import { postTodoAsynkThunk, setTodo } from "../Redux/Reducer/todoReducer";

// create TodoForm component
export default function TodoForm() {

    // define text var and input ref here
    const [text, setText] = useState()
    const inputRef = useRef()

    // create var to dispatch actions
    const dispatch = useDispatch()

    // function to add order 
    const handleAdd = (e) => {
        console.log(text)
        e.preventDefault();
        setText("");
        inputRef.current.focus();
        dispatch(notify("Yahh! New Task Added Successfully"))
        dispatch(postTodoAsynkThunk(text))
    }

    // return component here
    return (
        <form className={styles.formContainer} onSubmit = {handleAdd}>
            <input ref={inputRef} className={styles.inputBox} value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter new Todo here" />
            <button className={styles.addBtn} >Add</button>
        </form>
    )
}