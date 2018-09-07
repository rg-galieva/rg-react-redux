import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'client/components/nav/nav';
import s from './styles.scss';

class Header extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

    handleScroll = (ev) => {
      if (ev) ev.preventDefault();

      if (window.scrollY > 50) {
        document.getElementById('head').classList.add('is_sticky');
      } else {
        document.getElementById('head').classList.remove('is_sticky');
      }
    }

    render() {
      return (
        <header id="head" className={s.header}>
          <section className="clearfix">
            <NavLink to="/" className={s.logo}>
              <mark>RG</mark>
                      React Redux
            </NavLink>
            <Nav />
          </section>
        </header>
      );
    }
}

export default Header;
