import { combineReducers } from 'redux';
import { ITodo } from '../../types/todosType';
import {
  TODOS_TYPES,
  todosSuccessType,
  todosErrorsType,
} from './todosActionsTypes';

const todosReducer = (
  state = [],
  { type, payload }: todosSuccessType | any,
) => {
  switch (type) {
    case TODOS_TYPES.FETCH_TODOS_SUCCESS:
      return payload.todos || state;
    case TODOS_TYPES.EDIT_TODO_SUCCES:
      return (
        state.map((el: ITodo) =>
          el.id === payload.todo.id ? Object.assign({}, el, payload.todo) : el,
        ) || state
      );
    case TODOS_TYPES.DELETE_TODO_SUCCESS:
      return state.filter((el: ITodo) => el.id !== payload.id) || state;

    case TODOS_TYPES.ADD_TODO_SUCCESS:
      return [...state, payload.todo] || state;
    default:
      return state;
  }
};

const errorReducer = (state = '', { type, payload }: todosErrorsType) => {
  switch (type) {
    case TODOS_TYPES.FETCH_TODOS_ERROR:
    case TODOS_TYPES.DELETE_TODO_ERROR:
    case TODOS_TYPES.ADD_TODO_ERROR:
    case TODOS_TYPES.EDIT_TODO_ERROR:
      return payload.error || state;
    default:
      return state;
  }
};

export default combineReducers({
  todos: todosReducer,
  error: errorReducer,
});
