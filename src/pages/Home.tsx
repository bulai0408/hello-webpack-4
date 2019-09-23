import React from 'react';

import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';
import Footer from '@components/Footer';

import SearchBar from '@components/SearchBar';

const Home = () => {
  return (
    <>
      {/* <AddTodo />
      <VisibleTodoList />
      <Footer /> */}
      <SearchBar />
    </>
  );
};

export default Home;
