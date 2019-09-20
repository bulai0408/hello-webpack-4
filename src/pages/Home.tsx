import React from "react";

import AddTodo from "./AddTodo";
import VisibleTodoList from "./VisibleTodoList";
import Footer from "@components/Footer";

const Home = () => {
  return (
    <>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </>
  );
};

export default Home;
