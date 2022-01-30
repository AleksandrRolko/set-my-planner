import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./slices/task";

export default configureStore({
  reducer: {
    task: taskReducer,
  }
})
