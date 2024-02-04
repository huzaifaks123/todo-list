// import prtovider-tool and store to make state availbale
import { store } from "./store";
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';

import styles from "./styles/app.module.css"

// import pages and other Components here
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

// maintain app component with global state
function App() {
  return (
    <Provider store={store}>
      <body className={styles.app}>
        <TodoForm />
        <TodoList />
        <ToastContainer />
      </body>
    </Provider>
  );
}

export default App;
