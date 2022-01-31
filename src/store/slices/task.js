import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
import moment from "moment";

export const taskSlice = createSlice({
  name: "task",
  initialState: {
    tasks: [],
    selectedDate: moment().toDate(),
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
    dateSelected: (state, action) => {
      state.selectedDate = action.payload;
    }
  }
});

export const {
  tasksFetched,
  taskCreated,
  taskDeleted,
  taskUpdated,
  dateSelected,
} = taskSlice.actions;

export default taskSlice.reducer;
