import React, { memo } from 'react';
import TodosCreateForm from '../../components/TodosCreateForm/TodosCreateForm';

const TodosEditorPage = () => {
  const onClose = () => {};
  const MemoTodosCreateForm = memo(TodosCreateForm);
  return (
    <div>
      <MemoTodosCreateForm onClose={onClose} />
    </div>
  );
};

export default TodosEditorPage;
