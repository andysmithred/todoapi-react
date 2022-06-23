import { useState, useEffect } from "react";
import AddTask from "./AddTask";
import TasksFooter from "./TasksFooter";
import TasksHeader from "./TasksHeader";
import Tasks from "./Tasks";
import { fetchTask, fetchTasks } from "./tasksSlice";

const TasksMain = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const response = await fetchTasks();
      setTasks(response);
    };

    getTasks();
  }, []);

  const addTask = async (task) => {
    const response = await fetch("https://localhost:7164/api/todoitems", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    });

    const newTask = await response.json();
    setTasks([...tasks, newTask])
  }

  const deleteTask = async (id) => {
    await fetch(`https://localhost:7164/api/todoitems/${id}`, {
      method: "delete",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updatedTask = {
      ...taskToToggle,
      isComplete: !taskToToggle.isComplete,
    };

    await fetch(`https://localhost:7164/api/todoitems/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });

    setTasks(
      tasks.map((task) => {
        return task.id === id ? updatedTask : task
      })
    );
  };

  return (
    <div className="container">
      <TasksHeader
        title="Tasks"
        showAddTask={showAddTask}
        onShowAddTask={() => setShowAddTask(!showAddTask)}
      />
      {showAddTask && <AddTask onAddTask={addTask} />}
      <Tasks
        tasks={tasks}
        onDeleteTask={deleteTask}
        onToggleComplete={toggleComplete}
      />
      <TasksFooter />
    </div>
  );
};

export default TasksMain;
