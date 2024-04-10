// pages/index.js
import React from 'react';
import TodoList from '../../src/components/TodoList/TodoList';


function HomePage() {
  return (
    <div>
      <h1>Todo List App!</h1>
      <TodoList />
    </div>
  );
}

export default HomePage;
