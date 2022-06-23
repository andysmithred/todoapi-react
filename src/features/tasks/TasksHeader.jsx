import Button from "./Button";

const TasksHeader = ({ title, showAddTask, onShowAddTask }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        onClick={() => onShowAddTask()}
        text={showAddTask ? "Close" : "Add"}
        color={showAddTask ? "red" : "green"}
      ></Button>
    </header>
  );
};

TasksHeader.defaultProps = {
  title: "Task Manager",
};

export default TasksHeader;
