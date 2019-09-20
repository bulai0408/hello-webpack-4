import { ADD_TODO, TOGGLE_TODO } from "@redux/constants";

interface IInitialTodo {
  id: number;
  text: string;
}

interface ITodo extends IInitialTodo {
  completed: boolean;
}

const initialState: ITodo[] = [];

const todos = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default todos;
