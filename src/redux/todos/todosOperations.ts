import axios from 'axios';
import { Dispatch } from 'react';
import { ITodo, IResTodo, IResTodos } from '../../types/todosType';
import {
  AddTodosActionsTypes,
  deleteTodosActionType,
  EditTodosActionsType,
  FetchTodosActionTypes,
  TODOS_TYPES,
} from './todosActionsTypes';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

/*Edit todos*/
export const editTodo = (id: string | number, todo: ITodo) => {
  return async (d: Dispatch<EditTodosActionsType>) => {
    try {
      d({
        type: TODOS_TYPES.EDIT_TODO_START,
      });
      const res: IResTodo = await axios.put(`/todos/${id}`, todo);
      d({
        type: TODOS_TYPES.EDIT_TODO_SUCCES,
        payload: { todo: res.data },
      });
    } catch {
      d({
        type: TODOS_TYPES.EDIT_TODO_ERROR,
        payload: {
          error: 'Edit todos with some error',
        },
      });
    }
  };
};

/*Add todots*/
export const addTodos = (todo: ITodo) => {
  return async (d: Dispatch<AddTodosActionsTypes>) => {
    try {
      d({
        type: TODOS_TYPES.ADD_TODO_START,
      });

      const res: IResTodo = await axios.post('/todos', todo);
      d({
        type: TODOS_TYPES.ADD_TODO_SUCCESS,
        payload: { todo: res.data },
      });
    } catch {
      d({
        type: TODOS_TYPES.ADD_TODO_ERROR,
        payload: { error: 'Add todos with some error' },
      });
    }
  };
};
/*Fetch todos*/
export const fetchTodos = () => {
  return async (d: Dispatch<FetchTodosActionTypes>) => {
    try {
      d({
        type: TODOS_TYPES.FETCH_TODOS_START,
      });
      const res: IResTodos = await axios.get('/todos?_limit=10');
      d({
        type: TODOS_TYPES.FETCH_TODOS_SUCCESS,
        payload: { todos: res.data },
      });
    } catch {
      d({
        type: TODOS_TYPES.FETCH_TODOS_ERROR,
        payload: { error: 'Fetch todos with some error' },
      });
    }
  };
};
/*Delete todos*/
export const deleteTodo = (id: string | number) => {
  return async (d: Dispatch<deleteTodosActionType>) => {
    try {
      d({
        type: TODOS_TYPES.DELETE_TODO_START,
      });
      await axios.delete(`/todos/${id}`);
      d({
        type: TODOS_TYPES.DELETE_TODO_SUCCESS,
        payload: { id },
      });
    } catch {
      d({
        type: TODOS_TYPES.DELETE_TODO_ERROR,
        payload: {
          error: 'Delete todos with some error',
        },
      });
    }
  };
};
