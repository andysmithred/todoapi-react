import Task from "./Task";

const Tasks = ({ tasks, onDeleteTask, onToggleComplete }) => {
  const items = tasks.map((task) => {
    return (
      <Task
        key={task.id}
        task={task}
        onTaskDelete={onDeleteTask}
        onToggleComplete={onToggleComplete}
      />
    );
  });

  return <div>{items}</div>;
};

export default Tasks;
