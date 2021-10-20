export interface ITodo {
  userId: number | string;
  id: number | string;
  title: string;
  completed: boolean;
}
export interface ITodos {
  todos: ITodo[];
}

export interface ITodosError {
  error: string;
}
export interface ITodosId {
  id: number | string;
}
export interface IResTodo {
  data: ITodo;
}
export interface IResTodos {
  data: ITodo[];
}
