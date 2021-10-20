import { lazy } from "react";

const TodosPage = lazy(
  () =>
    import("../pages/TodosPage/TodosPage" /* webpackChunkName: "todos-page" */)
);

const TodosEditorPage = lazy(
  () =>
    import(
      "../pages/TodosEditorPage/TodosEditorPage" /* webpackChunkName: "todos-editor-page" */
    )
);

const routes = {
  TODOS_PAGE: {
    path: "/",
    component: TodosPage,
  },
  TODOS_EDIT: {
    path: "/editor",
    component: TodosEditorPage,
  },
};

export default routes;
