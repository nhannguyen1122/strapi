import React, { useCallback, useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { idText } from "typescript";
import { RootState } from "../../../../shared/redux/redux.store";
import SearchRedux from "./components/search";
import ItemRedux from "./components/task";
import { ListItem, MODE, PRIORITY_TASK } from "./todo-list.const";
import { addTask, deleteTask, updateTask } from "./todo-list.reducer";

function TodoListReduxPages() {
  const [mode, setMode] = useState(MODE.CREATE);
  const [editItem, setEditItem] = useState(null);
  const searchRef = useRef(null);
  const dispatch = useDispatch();
  const todoState = useSelector((state: RootState) => state.todoReducers);
  console.log("render");

  const handleDeleteItem = useCallback(
    (id) => {
      dispatch(deleteTask(id));
    },
    [dispatch]
  );

  const handleEditItem = useCallback(
    (item: ListItem) => {
      setMode(MODE.EDIT);
      searchRef.current.editInputValue(item.task);
      setEditItem(item);
    },
    [dispatch]
  );

  const createTask = useCallback(() => {
    dispatch(
      addTask({
        id: Math.random().toString(),
        createdAt: new Date().toDateString(),
        expireAt: "2024",
        priority: PRIORITY_TASK.LOW,
        task: searchRef.current.getInputValue(),
      })
    );

    setMode(MODE.CREATE);
  }, []);

  const updateTaskItem = useCallback((item: ListItem) => {
    dispatch(
      updateTask({
        ...item,
        task: searchRef.current.getInputValue(),
      })
    );
    setMode(MODE.CREATE);
  }, []);

  const handleSubmit = useCallback(() => {
    if (mode === MODE.CREATE) {
      createTask();
    } else {
      updateTaskItem(editItem);
    }
    searchRef.current.resetInputValue();
  }, [createTask, editItem, mode, updateTaskItem]);

  const renderList = () => {
    return todoState.listItem.map((i, index) => {
      return (
        <li key={index}>
          <ItemRedux
            onEditItem={handleEditItem}
            onDeleteItem={handleDeleteItem}
            index={index}
            item={i}
          />
        </li>
      );
    });
  };

  return (
    <React.Fragment>
      <SearchRedux mode={mode} ref={searchRef} onSubmit={handleSubmit} />

      <ul>{renderList()}</ul>
    </React.Fragment>
  );
}

export default TodoListReduxPages;
