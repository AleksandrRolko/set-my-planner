import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./slices/task";
import personReducer from "./slices/person";

export default configureStore({
  reducer: {
    task: taskReducer,
    person: personReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false,
  })
})
