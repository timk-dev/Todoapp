import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import styles from "./style.module.css";

import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  return (
    <div>
      <Header></Header>
      <div className={styles.app}>
        <div className={styles.screen}>
          <TodoList setTodoList={setTodoList} todoList={todoList}/>
          <Form 
          todo={todo}
          setTodo={setTodo}
          todoList={todoList} 
          setTodoList={setTodoList}
          ></Form>
        </div>
      </div>
    </div>
  );
}

export default App;
