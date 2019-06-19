import React, { useState} from "react";
import { useStoreActions } from "easy-peasy";

const AddTab = () => {
  const [content, setContent] = useState("");

  const { add } = useStoreActions(actions => ({
    add: actions.add
  }));

  return (
    <form
      className="w-100 my-3"
      onSubmit={e => {
        e.preventDefault();
        if (!content) return;
        add({
          content,
          completed: false
        });
        setContent("");
      }}
    >
      <p className="form-group w-100 mt-0">
        <label htmlFor="title" />
        <input
          type="text"
          id="title"
          className="w-100"
          onChange={e => setContent(e.target.value)}
          value={content}
        />
      </p>
      <input
        type="submit"
        value="Add Task"
        className="form-control btn-primary"
      />
    </form>
  );
};

export default AddTab;
