import React from "react";
import { ListItem } from "../todo-list.const";

function ItemRedux({
  item,
  index,
  onDeleteItem,
  onEditItem,
}: {
  item: ListItem;
  index: number;
  onDeleteItem: Function;
  onEditItem: Function;
}) {
  console.log("item render");

  return (
    <React.Fragment>
      <h1>{item?.task}</h1>
      <div>
        <span>{item?.createdAt}</span>
        <span>{item?.expireAt}</span>
      </div>
      <button onClick={() => onDeleteItem(item.id)}>delete</button>
      <button onClick={() => onEditItem(item)}>edit</button>
    </React.Fragment>
  );
}

export default ItemRedux;
