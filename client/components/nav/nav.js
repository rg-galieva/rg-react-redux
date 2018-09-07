import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './styles.scss';

const Nav = () => (
  <nav className={s.nav}>
    <NavLink to="/" activeClassName="is_act" exact>Main</NavLink>
    <NavLink to="/styles" activeClassName="is_act">Style Guide</NavLink>
    <a
      href="https://github.com/rg-galieva/rg-react-redux.git"
      target="_blank"
      rel="noopener noreferrer"
    >
GitHub page
    </a>
  </nav>
);

export default Nav;
