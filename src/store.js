// import reducer from slice
import { todoReducer } from "./Redux/Reducer/todoReducer";
import { notificationReducer } from "./Redux/Reducer/notificationReducer";

// import reuqired element to configure store
import { configureStore } from "@reduxjs/toolkit";

// export store to be availble at global state
export const store = configureStore({
    reducer: {
        todoReducer,
        notificationReducer
    }
})