
export const fetchTasks = async () => {
  const response = await fetch("https://localhost:7164/api/todoitems");
  const data = await response.json();
  return data;
};

export const fetchTask = async (id) => {
    const response = await fetch(`https://localhost:7164/api/todoitems/${id}`);
    const data = await response.json();
    return data;
}
