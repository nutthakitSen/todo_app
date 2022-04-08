import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface TaskType {
  id: string;
  detail: string;
  completed: boolean;
}

interface TaskWrapperType {
  value: TaskType[];
}

const initialState: TaskWrapperType = {
  value: [],
};

export const taskSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    getTask: (state, action) => {
      state.value = action.payload;
    },
    createTask: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    updateCompleteTask: (state, action) => {
      const index = state.value.findIndex(
        (task) => task.id === action.payload.id
      );
      state.value[index].completed = action.payload.completed;
    },
    deleteTask: (state, action) => {
      const leftData = state.value.filter(
        (task) => task.id !== action.payload.id
      );
      state.value = leftData;
    },
  },
});

export const { getTask, createTask, updateCompleteTask,deleteTask } = taskSlice.actions;
export const selectTask = (state: RootState) => state.tasks.value;
export default taskSlice.reducer;
