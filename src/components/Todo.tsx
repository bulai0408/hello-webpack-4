import React, { FC } from "react";

interface IProps {
  text: string;
  completed: boolean;
  onClick: () => void;
}

const Todo: FC<IProps> = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? "line-through" : "none"
    }}
  >
    {text}
  </li>
);

export default Todo;
