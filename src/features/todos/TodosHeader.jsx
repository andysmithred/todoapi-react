import Button from "../tasks/Button";

const TodosHeader = ({ title, showAddTodo, setShowAddTodo }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        text={showAddTodo ? "Close" : "Add"}
        color={showAddTodo ? "red" : "green"}
        onClick={() => setShowAddTodo(!showAddTodo)}
      ></Button>
    </header>
  );
};

TodosHeader.defaultProps = {
  title: "Todos",
};

export default TodosHeader;
