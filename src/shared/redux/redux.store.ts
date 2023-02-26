import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./redux.reducers";

export const store = configureStore({
  reducer: rootReducer,
  middleware: [],
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
