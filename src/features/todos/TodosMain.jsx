import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddTodo from "./AddTodo";
import Todos from "./Todos";
import TodosFooter from "./TodosFooter";
import TodosHeader from "./TodosHeader";
import { addTodo, deleteTodo, fetchTodos, toggleComplete } from "./todosSlice";

const TodosMain = () => {
  const [showAddTodo, setShowAddTodo] = useState(false);

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);
  let status = useSelector((state) => state.todos.status);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  const handleTodoDelete = async (id) => {
    dispatch(deleteTodo(id));
  };

  const addTodoCallback = (todo) => {
    dispatch(addTodo(todo))
  };

  return (
    <div className="container">
      <TodosHeader
        title="ToDos"
        showAddTodo={showAddTodo}
        setShowAddTodo={setShowAddTodo}
      />
      {showAddTodo && <AddTodo onAddTodo={addTodoCallback} />}
      <Todos
        todos={todos}
        onToggleComplete={handleToggleComplete}
        onTodoDelete={handleTodoDelete}
      />
      <TodosFooter status={status} />
    </div>
  );
};

export default TodosMain;
