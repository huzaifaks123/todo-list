// import required toolkit
import { createSlice } from "@reduxjs/toolkit"

// import toastcontainer for notification after installing
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// set initial state for reducer
const initialState = {
    message: ""
}

// create required slice with reducer and actions
const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        notify: (state, action) => {
            state.message = action.payload;
            toast.success(state.message, {
                position: "bottom-right"
            });
        },
        warning: (state, action) => {
            state.message = action.payload;
            toast.error(state.message, {
                position: "bottom-right"
            });
        },
        caution: (state, action) => {
            state.message = action.payload;
            toast.warn(state.message, {
                position: "bottom-right"
            });
        }
    }
})

// export reducer here
export const notificationReducer = notificationSlice.reducer;

// export acions here
export const { notify, warning, caution } = notificationSlice.actions;