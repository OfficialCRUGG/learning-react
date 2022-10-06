import { v4 as uuid } from "uuid";
import { useEffect, useRef, useState } from "react";

import TodoList from "./TodoList";

export interface TodoItemInterface {
  id: string;
  text: string;
  done: boolean;
}

export default function App() {
  // Define type here?
  const [todos, setTodos] = useState<TodoItemInterface[]>([]);

  // Best solution?
  const todoInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  function addTodo() {
    setTodos((previousTodos) => {
      return [
        ...previousTodos,
        {
          id: uuid(),
          text: todoInput.current?.value || "",
          done: false,
        },
      ];
    });
  }

  function toggleTodo(id: string) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    if (todo) {
      todo.done = !todo.done;
      setTodos(newTodos);
    }
  }

  function clearCompleted() {
    const newTodos = todos.filter((todo) => !todo.done);
    setTodos(newTodos);
  }

  function clearAll() {
    setTodos([]);
  }

  function deleteEntry(id: string) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  // Any better way to pass functions from App to TodoItem without having to go through TodoList?
  return (
    <>
      <h1>Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteEntry={deleteEntry} />
      <input ref={todoInput} type="text" />
      <button onClick={addTodo}>Add item</button>
      <p>{todos.length} items total</p>
      <p>{todos.filter((todo) => !todo.done).length} items left</p>
      <p>{todos.filter((todo) => todo.done).length} items completed</p>
      <button onClick={clearCompleted}>Clear completed</button>
      <button onClick={clearAll}>Clear all</button>
    </>
  );
}
