import { useState } from "react";

const AddTodo = ({ onAddTodo }) => {
  const [text, setText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`>> handleSubmit`);

    if (!text) console.log("Nothing to add");

    onAddTodo({ name: text, isComplete });
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label>Todo</label>
        <input
          type="text"
          placeholder="Add Todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
      </div>
      <div className="form-control form-control-check">
        <label>Is Complete</label>
        <input
          type="checkbox"
          checked={isComplete}
          value={isComplete}
          onChange={(e) => setIsComplete(e.target.checked)}
        ></input>
      </div>
      <input type="submit" value="Save Todo" className="btn btn-block"></input>
    </form>
  );
};

export default AddTodo;
