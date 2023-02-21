import { useState } from "react";

// iconos
import { RiSaveLine } from "react-icons/ri";
import { GiCancel } from "react-icons/gi";

const FormEdit = ({ item, onUpdate, setIsEdit }) => {
  const [newValue, setNewValue] = useState(item.title);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setNewValue(value);
  };

  const handleClickUpdateTodo = () => {
    onUpdate(item.id, newValue);
    setIsEdit(false);
  };

  const handleClickCancelTodo = () => {
    setIsEdit(false);
  };
  return (
    <>
      <form className="todoUpdateForm" onSubmit={handleSubmit}>
        <input
          className="todoUpdateInput"
          type="text"
          onChange={handleChange}
          value={newValue}
        />
        <button
          className="todoButton todoButtonEdit"
          onClick={handleClickUpdateTodo}
        >
          <RiSaveLine /> Actualizar
        </button>
        <button
          className="todoButton todoButtonDelete"
          onClick={handleClickCancelTodo}
        >
          <GiCancel /> Cancelar
        </button>
      </form>
    </>
  );
};

export default FormEdit;
