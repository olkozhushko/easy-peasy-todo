import React from "react";
import { useStoreActions } from "easy-peasy";

const Item = ({ todo }) => {
  const { toggle, remove, edit } = useStoreActions(actions => ({
    toggle: actions.toggle,
    remove: actions.remove,
    edit: actions.edit
  }));

  return (
    <li
      className="todo-item list-group-item d-flex justify-content-between"
    >
      <span
        onClick={e => {
            // if (e.target.tagName === "BUTTON") return;
            toggle(todo.id);
        }}
        style={{ textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer"}}
      >
        {todo.content}
      </span>
      <div className="task-controls">
        <button
          className="edit-btn btn-info mr-2"
          onClick={() => edit(todo.id)}
        >
          Edit
        </button>
        <button className="btn-danger" onClick={() => remove(todo.id)}>
          Remove
        </button>
      </div>
    </li>
  );
};

export default Item;
