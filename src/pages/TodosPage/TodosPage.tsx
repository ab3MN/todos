import React, { memo } from 'react';
import TodosList from '../../components/TodosList/TodosList';

const TodosPage = () => {
  const MemoTodosLists = memo(TodosList);
  return (
    <div>
      <MemoTodosLists />
    </div>
  );
};

export default TodosPage;
