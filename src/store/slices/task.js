import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

export const taskSlice = createSlice({
  name: "task",
  initialState: {
    tasks: [],
  },
  reducers: {
    tasksFetched: (state, action) => {
      state.tasks = action.payload;
    },
    taskCreated: (state, action) => {
      state.tasks.push(action.payload);
    },
    taskUpdated: (state, action) => {
      const index = _.findIndex(state.tasks, ['id', action.payload.id]);
      state.tasks.splice(index, 1, action.payload);
    },
    taskDeleted: (state, action) => {
      state.tasks = _.reject(state.tasks, ['id', action.payload]);
    },
  }
});

export const {
  tasksFetched,
  taskCreated,
  taskDeleted,
  taskUpdated,
} = taskSlice.actions;

export default taskSlice.reducer;
