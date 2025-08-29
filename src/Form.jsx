import { useState } from "react";
import { useCreateTask } from "./fetchHooks";

const Form = () => {
  const [newItemName, setNewItemName] = useState("");

  const { createTask, isPendingCreateTask } = useCreateTask(newItemName);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(newItemName, { onSuccess: () => setNewItemName("") });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>task bud</h4>
      <div className="form-control">
        <input
          type="text "
          className="form-input"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type="submit" className="btn" disabled={isPendingCreateTask}>
          add task
        </button>
      </div>
    </form>
  );
};
export default Form;
