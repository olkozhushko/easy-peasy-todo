import React from "react";
import { StoreProvider, createStore} from "easy-peasy";

import model from "./model";

import List from "./components/List";
import AddTab from "./components/AddTab";

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const store = createStore(model);

function ToDo() {
  return (
    <StoreProvider store={store}>
      <div className="w-75 my-4 mx-auto ml-4 min-vh-100">
        <Header />
        <AddTab />
        <List />
      </div>
    </StoreProvider>
  );
}

const Header = () => {
  return (
    <header>
      <h1 className="text-center text-dark">ToDO App built with easy-peasy library</h1>
    </header>
  )
}


export default ToDo;
