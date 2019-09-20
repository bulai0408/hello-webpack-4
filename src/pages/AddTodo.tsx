import React, { useState } from "react";
import { connect } from "react-redux";
import { Input, Button, Icon } from "antd";

import { addTodo, addTodoAsync } from "@redux/actions";

const AddTodo = ({ dispatch }: { dispatch: any }) => {
  const [text, setText] = useState("");

  const textChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const formSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(addTodo(text));
    setText("");
  };

  const addTodoAsyncCb = () => {
    dispatch(addTodoAsync(text));
    setText("");
  };

  return (
    <div>
      <form onSubmit={formSubmit}>
        <Icon type="plus-circle" />
        <Input value={text} onChange={textChange} />
        <Button onClick={formSubmit}>add</Button>
        <Button onClick={addTodoAsyncCb}>add async</Button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
