import React, { useState, useEffect } from "react";
import { useStoreActions } from "easy-peasy";

const FormEdit = ({ value, id }) => {
  const [editedValue, setEditValue] = useState(value);

  let inputRef = null;

  const addEdited = useStoreActions(actions => actions.addEdited);

  useEffect(() => {
    inputRef.focus();
  });

  return (
    <form
      className={`list-group-item d-flex justify-content-center align-items-center`}
      onSubmit={e => {
        e.preventDefault();
        if (!editedValue) return;
        addEdited({
          content: editedValue,
          id
        });
      }}
    >
      <label htmlFor="edit" />
      <input
        type="text"
        className="form-control h-100 border-left-0 
            border-right-0 border-top-0 edit-input"
        id="edit"
        value={editedValue}
        ref={el => (inputRef = el)}
        onChange={e => {
          setEditValue(e.target.value);
        }}
      />
      <button type="submit" className="btn-success">
        Finish
      </button>
    </form>
  );
};

export default FormEdit;
