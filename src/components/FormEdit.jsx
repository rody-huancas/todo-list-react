import { useState } from "react";

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
  return (
    <>
      <form className="todoUpdateForm" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newValue} />
        <button className="button" onClick={handleClickUpdateTodo}>
          Actualizar
        </button>
      </form>
    </>
  );
};

export default FormEdit;
