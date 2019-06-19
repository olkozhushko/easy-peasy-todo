import React, { useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";

import FormEdit from "./FormEdit";
import Item from "./Item";

const List = () => {
  const items = useStoreState(state => state.items);
  const fetchTodo = useStoreActions(actions => actions.fetchTodo);

  useEffect(() => {
    fetchTodo();
    // eslint-disable-next-line
  }, []);

  const { isEditable, taskToEdit } = useStoreState(state => state.general);

  return (
    <ul className="list-group todo-list">
      {items.map(item => {
        if (isEditable) {
          if (taskToEdit.id === item.id) {
            return (
              <FormEdit
                key={taskToEdit.id}
                value={taskToEdit.content}
                id={taskToEdit.id}
              />
            );
          }
        }
        return <Item key={item.id} todo={item} />;
      })}
    </ul>
  );
};

export default List;
