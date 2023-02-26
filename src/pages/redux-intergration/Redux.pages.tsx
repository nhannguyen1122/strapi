import React from "react";
import TodoListReduxPages from "./redux/todo-list/TodoListRedux.pages";

function ReduxContainer() {
  return (
    <React.Fragment>
      <div>
        <TodoListReduxPages />
      </div>
    </React.Fragment>
  );
}

export default ReduxContainer;
