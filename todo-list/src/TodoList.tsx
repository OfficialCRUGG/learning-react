import { TodoItemInterface } from "./App";
import TodoItem from "./TodoItem";
import "./TodoList.css";

// The typing definitions look ugly, look for better solution
export default function TodoList({
  todos,
  toggleTodo,
  deleteEntry,
}: {
  todos: TodoItemInterface[];
  toggleTodo: (id: string) => void;
  deleteEntry: (id: string) => void;
}) {
  return (
    // Can this be done better?
    <>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteEntry={deleteEntry} />
      ))}
    </>
  );
}
