import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import todoApp from "./reducers";
import App from "./App";
// import { addTodo, toggleTodo, setVisibilityFilter } from "./actions";
// import { VisibilityFilters } from "./actions/types";
import registerServiceWorker from "./registerServiceWorker";

let store = createStore(todoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// // Log the initial state
// console.log(store.getState());

// // Every time the state changes, log it
// // Note that subscribe() returns a function for unregistering the listener
// const unsubscribe = store.subscribe(() => console.log(store.getState()));

// // Dispatch some actions
// store.dispatch(addTodo("Learn about actions"));
// store.dispatch(addTodo("Learn about reducers"));
// store.dispatch(addTodo("Learn about store"));
// store.dispatch(toggleTodo(0));
// store.dispatch(toggleTodo(1));
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

// // Stop listening to state updates
// unsubscribe();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
