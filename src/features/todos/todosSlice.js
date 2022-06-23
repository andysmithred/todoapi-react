import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchTodosAPI,
  fetchTodoAPI,
  deleteTodoAPI,
  updateTodoAPI,
  addTodoAPI,
} from "./todosAPI";

const initialState = {
  items: [],
  status: "idle",
};

// Thunks

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await fetchTodosAPI();
  return response;
});

export const addTodo = createAsyncThunk("todos/addTodo", async (todo) => {
  const response = await addTodoAPI(todo);
  return response;
});

export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
  await deleteTodoAPI(id);
  return id;
});

export const toggleComplete = createAsyncThunk(
  "todos/toggleComplete",
  async (id) => {
    const todoToToggle = await fetchTodoAPI(id);
    const updatedTodo = {
      ...todoToToggle,
      isComplete: !todoToToggle.isComplete,
    };
    await updateTodoAPI(updatedTodo);
    return updatedTodo;
  }
);

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    removeTodo: (state, action) => {
      console.log(typeof action.payload);
      state.status = "removed";
      state.items = state.items.filter((item) => item.id !== action.payload);
      //state.items.push({ id: 10, name: "Eject", isComplete: true });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "complete";
        state.items = action.payload;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.status = "deleted";
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(toggleComplete.fulfilled, (state, action) => {
        state.status = "toggled";
        state.items = state.items.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.status = "added";
        state.items.push(action.payload);
      });
  },
});

export const { removeTodo } = todosSlice.actions;

// selector
//export const selectTodos = (state) => state.todos.items;

export default todosSlice.reducer;
