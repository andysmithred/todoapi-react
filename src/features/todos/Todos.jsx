// import { useSelector, useDispatch } from "react-redux";
// import { selectTodos, fetchTodos } from "./todosSlice";

// import styles from "./Todos.module.css";
// import { TodoItem } from "./TodoItem";

import TodoItem from "./TodoItem";

const Todos = ({ todos, onToggleComplete, onTodoDelete }) => {
  const items = todos.map((todo) => {
    return (
      <TodoItem
        key={todo.id}
        todo={todo}
        onToggleComplete={onToggleComplete}
        onTodoDelete={onTodoDelete}
      />
    );
  });

  return <div>{items}</div>;
};

export default Todos;

// export const Todos = () => {
//   const dispatch = useDispatch();
//   const todos = useSelector(selectTodos);

//   const handleCheckboxChange = (id, value) => {
//     console.log(`Checkbox changed: ${id}|${value}`);
//   };

//   const handleEdit = (id) => {
//     console.log(`Editing: ${id}`);
//   };
//   const handleDelete = (id) => {
//     console.log(`Deleting: ${id}`);
//   };

//   var items = todos.map((row, index) => {
//     return (
//       <TodoItem
//         item={row}
//         key={index}
//         onCheckboxChange={handleCheckboxChange}
//         onEdit={handleEdit}
//         onDelete={handleDelete}
//       />
//     );
//   });

//   return (
//     <div>

//       <div className={styles.row}>
//         <input className={styles.textbox}></input>
//         <button
//           className={styles.button}
//           onClick={() => dispatch(fetchTodos())}
//         >
//           Add
//         </button>
//       </div>
//       <div>{items}</div>

//     </div>
//   );
// };
