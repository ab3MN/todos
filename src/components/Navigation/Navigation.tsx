import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes/routes";
import style from "./Navigation.module.css";

const Navigation: FC = () => {
  return (
    <nav className={style.nav}>
      <NavLink
        to={routes.TODOS_PAGE.path}
        className={style.nav_item}
        activeClassName={style.nav_item__active}>
        Todos
      </NavLink>
      <NavLink
        to={routes.TODOS_EDIT.path}
        className={style.nav_item}
        activeClassName={style.nav_item__active}>
        Create todo form
      </NavLink>
    </nav>
  );
};

export default Navigation;
