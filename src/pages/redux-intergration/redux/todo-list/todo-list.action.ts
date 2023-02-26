import { ListItem } from "./todo-list.const";
import { TodoListState } from "./todo-list.reducer";

export enum TODO_LIST_ACTION {
  ADD = "ADD",
  UPDATE = "UPDATE",
  DELETE = "DELETE",
}

export interface ActionInterface<T> {
  payload: T;
  type: TODO_LIST_ACTION;
}

/**
 * @deprecated
 * no-use with useage of createSlide
 */
const todoListActions = {
  addTodoTask: (payload: ListItem): ActionInterface<ListItem> => {
    return {
      payload,
      type: TODO_LIST_ACTION.ADD,
    };
  },

  updateTask: (payload: ListItem): ActionInterface<ListItem> => {
    return {
      payload,
      type: TODO_LIST_ACTION.UPDATE,
    };
  },

  deleteTodoTask: (payload: string): ActionInterface<string> => {
    return {
      payload,
      type: TODO_LIST_ACTION.DELETE,
    };
  },
};

export default todoListActions;
