import { ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO } from '../constants';

let nextTodoId = 0;
export const addTodo = (text: string) => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
});

export const addTodoAsync = (text: string) => (dispatch: any) => {
  setTimeout(() => {
    dispatch(addTodo(text));
  }, 1000);
};

export const setVisibilityFilter = (filter: any) => ({
  type: SET_VISIBILITY_FILTER,
  filter
});

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  id
});
