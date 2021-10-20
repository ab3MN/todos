import React, { FC, useEffect, useState } from 'react';
import { Checkbox, Stack, IconButton, Modal, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useDispatchAcions } from '../../hooks/useDispatchActions';
import { useTypedSelector } from '../../hooks/useTypedSelectors';
import { ITodo } from '../../types/todosType';
import style from './TodosList.module.css';
import TodosCreateForm from '../TodosCreateForm/TodosCreateForm';

const boxStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const TodosList: FC = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [todoToEdit, setTodoToEdit] = useState<any>({});
  const { fetchTodos, deleteTodo } = useDispatchAcions();
  const todos: Array<ITodo> = useTypedSelector(state => state.todos.todos);

  const openModalHandler = (): void => setModalOpen(true);
  const closeModalHandler = (): void => setModalOpen(false);

  useEffect(() => {
    const todos = localStorage.getItem('todos');
    if (todos) {
      return;
    }
    fetchTodos();
  });

  return (
    <main>
      <ul className={style.list}>
        {todos.map(el => (
          <li key={el.id} className={style.item}>
            <p className={style.title}>{el.title}</p>
            <Checkbox checked={el.completed} color="success" />
            <Stack className={style.btn_box} direction="row" spacing={1}>
              <IconButton
                aria-label="edit"
                size="small"
                onClick={() => {
                  setTodoToEdit(el);
                  openModalHandler();
                }}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                aria-label="delete"
                size="small"
                color="secondary"
                onClick={() => deleteTodo(el.id)}
              >
                <HighlightOffIcon />
              </IconButton>
            </Stack>
          </li>
        ))}
      </ul>
      <Modal
        open={isModalOpen}
        onClose={closeModalHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={boxStyle}>
          <TodosCreateForm onClose={closeModalHandler} todo={todoToEdit} />
        </Box>
      </Modal>
    </main>
  );
};

export default TodosList;
