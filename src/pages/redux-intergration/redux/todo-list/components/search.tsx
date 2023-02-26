import React, { memo, useImperativeHandle, forwardRef, useRef } from "react";
import { MODE } from "../todo-list.const";

function SearchRedux(
  { onSubmit, mode }: { mode: MODE; onSubmit: VoidFunction },
  ref
) {
  console.log("search render");
  const inputRef = useRef(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        getInputValue: () => inputRef.current.value,
        resetInputValue: () => (inputRef.current.value = ""),
        editInputValue: (value) => (inputRef.current.value = value),
      };
    },
    []
  );

  return (
    <React.Fragment>
      <input type="text" ref={inputRef} />
      <button onClick={() => onSubmit()}>
        {mode === MODE.CREATE ? "add task" : "Update"}
      </button>
    </React.Fragment>
  );
}

export default memo(forwardRef(SearchRedux));
