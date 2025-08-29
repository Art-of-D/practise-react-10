import { memo } from "react";
import { useDeleteTask, useUpdateTask } from "./fetchHooks";

const SingleItem = ({ item }) => {
  const { deleteTask, isPendingDeleteTask } = useDeleteTask();
  const { editTask, isPendingUpdateTask } = useUpdateTask();
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.isDone}
        disabled={isPendingUpdateTask}
        onChange={() => editTask({ taskId: item.id, isDone: !item.isDone })}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.isDone && "line-through",
        }}
      >
        {item.title}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => deleteTask(item.id)}
        disabled={isPendingDeleteTask}
      >
        delete
      </button>
    </div>
  );
};
export default memo(SingleItem);
