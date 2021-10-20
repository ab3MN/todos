import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as to from "../redux/todos/todosOperations";

const Actions = { ...to };

export const useDispatchAcions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(Actions, dispatch);
};
