import React from "react";

// iconos
import { FiEdit3 } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

const TodoElement = ({ item, onDelete, setIsEdit }) => {
  return (
    <>
      <div className="todoInfo">
        <div className="todoTitle">{item.title}</div>
        <button
          className="todoButton todoButtonEdit"
          onClick={() => setIsEdit(true)}
        >
          <FiEdit3 /> Editar
        </button>
        <button
          className="todoButton todoButtonDelete"
          onClick={(e) => onDelete(item.id)}
        >
          <MdDeleteOutline /> Eliminar
        </button>
      </div>
    </>
  );
};

export default TodoElement;
