import TodoApp from "./components/todoApp";
function App() {
  return (
    <>
      <div className="container">
        <h1 className="todoTitleHeader">
          Lista de <span className="todosSubtitle">Tareas</span>
        </h1>
        <TodoApp />
      </div>
    </>
  );
}

export default App;
