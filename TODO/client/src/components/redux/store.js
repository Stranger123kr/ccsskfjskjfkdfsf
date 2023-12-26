import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./slice/TodoSlice";
export const store = configureStore({
  reducer: {
    Todo: TodoSlice,
  },
});
