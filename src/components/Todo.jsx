import { useState } from "react";
import FormEdit from "./FormEdit";
import TodoElement from "./TodoElement";

const Todo = ({ item, onUpdate, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      <div className="todo">
        {isEdit ? (
          <FormEdit item={item} onUpdate={onUpdate} setIsEdit={setIsEdit} />
        ) : (
          <TodoElement item={item} onDelete={onDelete} setIsEdit={setIsEdit} />
        )}
      </div>
    </>
  );
};

export default Todo;
