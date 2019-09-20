import React, { FC } from "react";

import Todo from "./Todo";

type ITodo = {
  id: number;
  text: string;
  completed: boolean;
};

interface IProps {
  todos: ITodo[];
  toggleTodo: (id: number) => void;
}

const TodoList: FC<IProps> = ({ todos, toggleTodo }) => {
  const setToggle = (id: number) => {
    toggleTodo(id);
  };
  return (
    <ul>
      {todos.map((i: ITodo) => (
        <Todo onClick={() => setToggle(i.id)} key={i.id} {...i} />
      ))}
    </ul>
  );
};

export default TodoList;
