import React, { useMemo } from "react";

const delay = (time) => {
  const start = Date.now();
  while (Date.now() - start < time) {
    continue;
  }
  return start;
};

const areEqual = (prevProps, nextProps) => {
  if (prevProps.status === nextProps.status) {
    return true;
  }
  return false;
};

const TodoItem = ({ title, id, status, handleDelete, onToggle }) => {
  /** Expensive calculation */
  const time = useMemo(() => delay(200), [status]);

  return (
    <div
      style={{
        display: "flex",
        gap: 4,
        justifyContent: "center",
        background: "aqua",
        color: "black",
        padding: "10px",
        margin: "auto",
        width: "200px",
        border: "1px solid grey",
        marginTop: "20px"
      }}
    >
      <div>{title}</div>
      <button onClick={() => onToggle(id)}> {`${status}`}</button>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
};

export const MemoisedTodoItemWithoutComparator = React.memo(TodoItem);
export const MemoisedTodoItem = React.memo(TodoItem, areEqual);

export default TodoItem;
