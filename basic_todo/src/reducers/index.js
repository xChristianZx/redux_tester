import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;

/*
this is the same as combineReducers above

function todoApp(state = {}, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  };
}
*/
