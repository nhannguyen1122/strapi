import { ListItem } from "./todo-list.const";
import { createSlice } from "@reduxjs/toolkit";
import { ActionInterface } from "./todo-list.action";
import { findIndex } from "./todo-list.helper";

export interface TodoListState {
  listItem: ListItem[];
  createBy: string;
}

const initialState: TodoListState = {
  listItem: [],
  createBy: "",
};

export const todoSlice = createSlice({
  name: "todo-list",
  initialState,
  /**
   * Althought using createSlide will not mutate the original state by using imerjs,
   * but the best practise is to update with immutable methods and tricks of js
   */
  reducers: {
    addTask: (state, action: ActionInterface<ListItem>) => {
      return {
        ...state,
        listItem: [...state.listItem, action.payload],
      };
    },
    updateTask: (state, action: ActionInterface<ListItem>) => {
      const activeIndex = findIndex(state.listItem, action.payload.id);

      return {
        ...state,
        listItem: [
          ...state.listItem.slice(0, activeIndex),
          {
            id: action.payload.id,
            task: action.payload.task,
            createdAt: action.payload.createdAt,
            expireAt: action.payload.expireAt,
            priority: action.payload.priority,
          },
          ...state.listItem.slice(activeIndex + 1),
        ] as ListItem[],
      };
    },
    deleteTask: (state, action: ActionInterface<string>) => {
      return {
        ...state,
        listItem: state.listItem.filter((i) => i.id !== action.payload),
      };
    },
  },
});
const { reducer: todoReducers, actions } = todoSlice;

export const { addTask, deleteTask, updateTask } = actions;

export default todoReducers;
