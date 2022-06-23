export const fetchTodosAPI = async () => {
  const response = await fetch("https://localhost:7164/api/todoitems");
  const data = await response.json();
  return data;
};

export const fetchTodoAPI = async (id) => {
  const response = await fetch(`https://localhost:7164/api/todoitems/${id}`);
  const data = await response.json();
  return data;
};

export const addTodoAPI = async (todo) => {
  const response = await fetch("https://localhost:7164/api/todoitems", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });

  const data = await response.json();
  return data;
};

export const deleteTodoAPI = async (id) => {
  await fetch(`https://localhost:7164/api/todoitems/${id}`, {
    method: "delete",
  });
};

export const updateTodoAPI = async (updatedTodo) => {
  await fetch(`https://localhost:7164/api/todoitems/${updatedTodo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedTodo),
  });
};
