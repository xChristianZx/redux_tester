import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { selectSubreddit, fetchPostsIfNeeded } from "./actions/actions";
import configureStore from "./store/configureStore";
import registerServiceWorker from "./registerServiceWorker";

const store = configureStore();
// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunkMiddleware, loggerMiddleware)
// );

store.dispatch(selectSubreddit("reactjs"));
store
  .dispatch(fetchPostsIfNeeded("reactjs"))
  .then(() => console.log(store.getState()));

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
