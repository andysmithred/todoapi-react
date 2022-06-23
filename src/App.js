import "./App.css";
import { Counter } from "./features/counter/Counter";
import TasksMain from "./features/tasks/TasksMain";
import TodosMain from "./features/todos/TodosMain";

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <Counter />
        <div className="row">
          <TasksMain />
          <TodosMain />
        </div>
      </div>
    </div>
  );
}

export default App;
