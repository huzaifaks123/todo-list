// import required toolkit
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// import axios to fetch data
import axios from "axios"

// set initial state for reducer
const initialState = {
    todos: []
}

// fetch asynchronous data to set initial state from API 
export const getTodoAsynkThunk = createAsyncThunk(
    "getTodo/setState",
    () => {
        return axios.get("https://jsonplaceholder.typicode.com/todos")
    }
)

// send/post asynchronous data to API
export const postTodoAsynkThunk = createAsyncThunk(
    "postTodo/setState",
    async (payload) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            method: 'POST',
            body: JSON.stringify({
                title: payload,
                completed: false
            }),
        })
        return response.json()
    }
    )
    
    // update asynchronous data to API
    export const toggleTodoAsynkThunk = createAsyncThunk(
        "toggleTodo/setState",
    async (payload) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${payload.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title: payload.id,
                completed : !payload.completed,
                userId : payload.userId
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
        })
        return response.json()
    }
    )
    
    // delete asynchronous data from API
    export const deleteTodoAsynkThunk = createAsyncThunk(
        "deleteTodo/setState",
        async (payload) => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${payload.id}`, {
                method: 'DELETE',
            });
        }
        )
        
        // create required slice with reducer and actions
const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        setTodo: (state, action) => {
            state.todos = [...state.todos, { title: action.payload, completed: false }]
        },
        toggleStatus: (state, action) => {
            state.todos.map((todo) => (todo.title === action.payload) ? todo.completed = !todo.completed : todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.title !== action.payload)
        }
    },
    // Using extra Reducer for fetching asynchronous data
    extraReducers: (builder) => {
        builder.addCase(getTodoAsynkThunk.fulfilled, (state, action) => {
            state.todos = [...action.payload.data]
        })
        .addCase(postTodoAsynkThunk.fulfilled, (state, action) => {
            state.todos.push(action.payload)
        })
        .addCase(toggleTodoAsynkThunk.fulfilled, (state, action) => {
        })
    }
})

// export reducer here
export const todoReducer = todoSlice.reducer;

// export acions here
export const { setTodo, toggleStatus, removeTodo } = todoSlice.actions

// export selector here
export const todoSelector = (state) => state.todoReducer