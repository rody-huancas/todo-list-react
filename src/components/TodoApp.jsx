import { useState, useEffect } from "react";
import Todo from "./Todo";

const TodoApp = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);
  const [validation, setValidation] = useState(true);

  // Cargar los datos de localStorage al cargar la página
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

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

    if (title === "") {
      setValidation(false);
      setTimeout(() => {
        setValidation(true);
      }, 4000);
      return;
    }

    const temp = [...todos];
    temp.unshift(newTodo);

    setTodos(temp);
    setTitle("");

    // Guardar los datos en localStorage
    localStorage.setItem("todos", JSON.stringify(temp));
  };

  const handelUpdate = (id, value) => {
    const temp = [...todos];
    const item = temp.find((item) => item.id === id);
    item.title = value;
    setTodos(temp);

    // Guardar los datos en localStorage
    localStorage.setItem("todos", JSON.stringify(temp));
  };

  const handleDelete = (id) => {
    const temp = todos.filter((item) => item.id !== id);

    setTodos(temp);

    // Guardar los datos en localStorage
    localStorage.setItem("todos", JSON.stringify(temp));
  };

  return (
    <>
      <div className="todoContainer">
        {validation ? (
          ""
        ) : (
          <p className="todoError">Error!, Debes ingresar una tarea</p>
        )}
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
          {todos.length === 0 ? (
            <p className="todosTitleAdd">
              ¡Agrega tus tareas!{" "}
              <span className="todosSubtitle">y se mostrarán aquí</span>.
            </p>
          ) : (
            todos.map((item) => (
              <Todo
                key={item.id}
                item={item}
                onUpdate={handelUpdate}
                onDelete={handleDelete}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default TodoApp;
