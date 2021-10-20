import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import todosReducer from "./todos/todosReducer";
import * as storage from "redux-storage";
import createEngine from "redux-storage-engine-localstorage";

const rootReducer = storage.reducer(
  combineReducers({
    todos: todosReducer,
  })
);
const engine = createEngine("todos");
const engineMiddleWare = storage.createMiddleware(engine);

const middleWare = [ReduxThunk, engineMiddleWare];

const enchancer =
  process.env.NODE_ENV === "development"
    ? composeWithDevTools(applyMiddleware(...middleWare))
    : applyMiddleware(...middleWare);

export const store = createStore(rootReducer, enchancer);

const load = storage.createLoader(engine);
load(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
