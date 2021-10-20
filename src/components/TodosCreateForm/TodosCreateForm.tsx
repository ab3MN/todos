import React, { useState, FC } from 'react';
import { TextField, Button, Checkbox } from '@mui/material';
import shortid from 'shortid';
import { useDispatchAcions } from '../../hooks/useDispatchActions';
import style from './TodosCreateForm.module.css';

interface ITodosEditorProps {
  onClose: () => void;
  todo?: any;
}

const TodosCreateForm: FC<ITodosEditorProps> = ({ onClose, todo }) => {
  const [title, setTitle] = useState<string>(todo?.title || '');
  const [isCompleted, setCompleted] = useState<boolean>(
    todo?.completed || false,
  );
  const [message, setMessage] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };
  const handleChecked = () => {
    setCompleted(prevState => !prevState);
  };

  const { addTodos, editTodo } = useDispatchAcions();

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const trimTitle = title.trim();

    if (trimTitle.length < 5) {
      setMessage('Title length min 5 symbols');
      setTimeout(() => {
        setMessage('');
      }, 1500);
      return;
    }

    const todoToAdd = {
      title: trimTitle,
      userId: shortid.generate(),
      id: shortid.generate(),
      completed: isCompleted,
    };

    const editTodoHandler = () => {
      editTodo(todo.id, { ...todo, title: trimTitle, completed: isCompleted });
      onClose();
    };

    todo?.id ? editTodoHandler() : addTodos(todoToAdd);

    setTitle('');
    setCompleted(false);
  };

  return (
    <section className={style.form_container}>
      <form onSubmit={handleSubmit} className={style.form}>
        <TextField
          value={title}
          onChange={handleChange}
          type="text"
          name="title"
          variant="outlined"
          label="Title"
          sx={{ width: '700px', marginBottom: '20px' }}
        />
        <Checkbox
          color="success"
          checked={isCompleted}
          onChange={handleChecked}
        />
        <Button type="submit" sx={{ width: '200px' }}>
          Save
        </Button>
      </form>
      {message && (
        <div className={style.notification_container}>
          <h3 className={style.notification}>{message}</h3>
        </div>
      )}
    </section>
  );
};

export default TodosCreateForm;
