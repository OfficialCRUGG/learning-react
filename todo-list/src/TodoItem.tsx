import { TodoItemInterface } from "./App";
import "./TodoItem.css";

export default function TodoItem({
  todo,
  toggleTodo,
  deleteEntry,
}: {
  todo: TodoItemInterface;
  toggleTodo: (id: string) => void;
  deleteEntry: (id: string) => void;
}) {
  function handleCheckbox() {
    toggleTodo(todo.id);
  }

  function deleteClick() {
    deleteEntry(todo.id);
  }

  return (
    <div className="todoItem">
      <input type="checkbox" checked={todo.done} onChange={handleCheckbox} />
      <label>
        {todo.text} ({todo.id})
      </label>
      <button onClick={deleteClick}>Delete entry</button>
    </div>
  );
}
