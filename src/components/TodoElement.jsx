import React from "react";

const TodoElement = ({ item, onDelete, setIsEdit }) => {
  return (
    <>
      <div className="todoInfo">
        {item.title}
        <button onClick={() => setIsEdit(true)}>Editar</button>
        <button onClick={(e) => onDelete(item.id)}>Eliminar</button>
      </div>
    </>
  );
};

export default TodoElement;
