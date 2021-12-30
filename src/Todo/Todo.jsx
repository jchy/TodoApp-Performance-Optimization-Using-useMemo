import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem, {
  MemoisedTodoItem,
  MemoisedTodoItemWithoutComparator
} from "./TodoItem";
import { v4 as uuid } from "uuid";

function Todo() {
  // BE CAREFUL HERE
  const [state, setState] = useState("");
  const [data, setData] = useState(() => {
    return new Array(5).fill(0).map((_, i) => ({
      id: i,
      title: `${i}th element`,
      status: false
    }));
  });
  const handleAdd = (title) => {
    setData([
      ...data,
      {
        id: uuid(),
        title: title,
        status: false
      }
    ]);
  };

  const handleToggle = (id) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );

    setData(updatedData, []);
  };
  // const handleToggle = React.useCallback(
  //   (id) => {
  //     const updatedData = data.map((item) =>
  //       item.id === id ? { ...item, status: !item.status } : item
  //     );

  //     setData(updatedData, []);
  //   },
  //   [data]
  // );
  // const handleToggle = React.useCallback((id) => {
  //   setData((prev) =>
  //     prev.map((item) =>
  //       item.id === id ? { ...item, status: !item.status } : item
  //     )
  //   );
  // }, []);
  console.log(data);
  return (
    <div>
      <div>
        <input
          placeholder="add something"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <button onClick={() => handleAdd(state)}> ADD </button>
      </div>
      {data?.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          title={item.title}
          status={item.status}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
}

export default Todo;

// class Todo extends React.Component {
//   constructor(){

//   }
//   handleAdd(){

//   }
//   render(){

//   }
// }
