import { useState } from "react";
import Todo from "./Todo";

const TodoApp = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;

    setTitle(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };

    const temp = [...todos];
    temp.unshift(newTodo);

    setTodos(temp);
    setTitle("");
  };

  const handelUpdate = (id, value) => {
    const temp = [...todos];
    const item = temp.find((item) => item.id === id);
    item.title = value;
    setTodos(temp);
  };

  const handleDelete = (id) => {
    const temp = todos.filter((item) => item.id !== id);

    setTodos(temp);
  };

  return (
    <>
      <div className="todoContainer">
        <form className="todoCreateForm" onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            className="todoInput"
            value={title}
            placeholder="Ingrese su tarea"
          />
          <input
            onClick={handleSubmit}
            type="submit"
            value="Crear Tarea"
            className="buttonCreate"
          />
        </form>

        <div className="todosContainer">
          {todos.map((item) => (
            <Todo
              key={item.id}
              item={item}
              onUpdate={handelUpdate}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TodoApp;
