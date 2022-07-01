import React from "react";
import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
export const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Create expense</div>
      <nav className={classes.nav}>
        <ul>
          <NavLink to="/expenses" activeClassName={classes.active}>
            All expenses
          </NavLink>

          <NavLink to="/" activeClassName={classes.active}>
            New expenses
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};
