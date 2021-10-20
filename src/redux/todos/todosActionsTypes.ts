import { ITodos, ITodosError, ITodosId, ITodo } from '../../types/todosType';

export enum TODOS_TYPES {
  FETCH_TODOS_START = 'FETCH_TODOS_START',
  FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
  FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',

  ADD_TODO_START = 'ADD_TODO_START',
  ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS',
  ADD_TODO_ERROR = 'ADD_TODO_ERROR',

  EDIT_TODO_START = 'EDIT_TODO_START',
  EDIT_TODO_SUCCES = 'EDIT_TODO_SUCCES',
  EDIT_TODO_ERROR = 'EDIT_TODO_ERROR',

  DELETE_TODO_START = 'DELETE_TODO_START',
  DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS',
  DELETE_TODO_ERROR = 'DELETE_TODO_ERROR',
}

/*Fetch Todos*/
export interface IFetchTodosStart {
  type: TODOS_TYPES.FETCH_TODOS_START;
}
export interface IFetchTodosSuccess {
  type: TODOS_TYPES.FETCH_TODOS_SUCCESS;
  payload: ITodos;
}
export interface IFetchTodosError {
  type: TODOS_TYPES.FETCH_TODOS_ERROR;
  payload: ITodosError;
}
export type FetchTodosActionTypes =
  | IFetchTodosStart
  | IFetchTodosSuccess
  | IFetchTodosError;
/*Add Todos*/
export interface IAddTodoStart {
  type: TODOS_TYPES.ADD_TODO_START;
}
export interface IAddTodoSuccess {
  type: TODOS_TYPES.ADD_TODO_SUCCESS;
  payload: { todo: ITodo };
}
export interface IAddTodoError {
  type: TODOS_TYPES.ADD_TODO_ERROR;
  payload: ITodosError;
}
export type AddTodosActionsTypes =
  | IAddTodoStart
  | IAddTodoSuccess
  | IAddTodoError;
/*Delete Todo*/
export interface IDeleteTodoStart {
  type: TODOS_TYPES.DELETE_TODO_START;
}
export interface IDeleteTodoSuccess {
  type: TODOS_TYPES.DELETE_TODO_SUCCESS;
  payload: ITodosId;
}
export interface IDeleteTodoError {
  type: TODOS_TYPES.DELETE_TODO_ERROR;
  payload: ITodosError;
}
export type deleteTodosActionType =
  | IDeleteTodoStart
  | IDeleteTodoSuccess
  | IDeleteTodoError;
/*Edit Todo*/
export interface IEditTodosStart {
  type: TODOS_TYPES.EDIT_TODO_START;
}
export interface IEditTodosSuccess {
  type: TODOS_TYPES.EDIT_TODO_SUCCES;
  payload: { todo: ITodo };
}
export interface IEditTodosError {
  type: TODOS_TYPES.EDIT_TODO_ERROR;
  payload: ITodosError;
}
export type EditTodosActionsType =
  | IEditTodosStart
  | IEditTodosSuccess
  | IEditTodosError;

/*Errors type*/
export type todosErrorsType =
  | IFetchTodosError
  | IAddTodoError
  | IDeleteTodoError
  | IEditTodosError;
/*Succes type*/
export type todosSuccessType =
  | IFetchTodosSuccess
  | IAddTodoSuccess
  | IEditTodosSuccess
  | IDeleteTodoSuccess;
