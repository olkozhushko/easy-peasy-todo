import { action, thunk } from "easy-peasy";
import uuid from "uuid";

export default {
    items: [],
    general: {
        isEditing: false,
        taskToEdit: null
    },
    //thunks
    fetchTodo: thunk(async actions => {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
        const data = await res.json();

        actions.setTodo(data);
    }),
    //actions
    setTodo: action((state, data) => {
        state.items = data.map(el => {
            const newEl = {
                id: uuid.v4(),
                content: el.title,
                completed: el.completed
            }
            return newEl;
        })
    }),
    toggle: action((state, id) => {
        state.items.map(item => {
            if(item.id === id) {
                item.completed = !item.completed;
            }
            return item;
        })
    }),
    remove: action((state, id) => {
        state.items = state.items.filter(el => el.id !== id);
    }),
    add: action((state, todo) => {
      todo.id = uuid.v4();
      state.items = [...state.items, todo];
    }),
    edit: action((state, id) => {
        const taskToEdit = state.items.filter(el => el.id === id);
        state.general = {
            isEditable: true,
            taskToEdit: taskToEdit[0]
        }
    }),
    addEdited: action((state, editedTodo) => {
        state.items = state.items.map(el => {
            if(el.id === editedTodo.id) {
                el.content = editedTodo.content;
            }
            return el;
        })
        state.general = {
            isEditing: false,
            taskToEdit: null
        }
    })
}