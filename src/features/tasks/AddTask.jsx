import { useState } from "react";

const AddTask = ({ onAddTask }) => {
  const [text, setText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Handle submit: ${text} | ${isComplete}`);

    if (!text) {
      alert("Please enter some text");
      return;
    }

    onAddTask({ name: text, isComplete });

    // clear fields
    setText("");
    setIsComplete(false);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
      </div>
      <div className="form-control form-control-check">
        <label>Is Complete?</label>
        <input
          type="checkbox"
          checked={isComplete}
          value={isComplete}
          onChange={(e) => setIsComplete(e.target.checked)}
        ></input>
      </div>
      <input type="submit" value="Save Task" className="btn btn-block"></input>
    </form>
  );
};

export default AddTask;
