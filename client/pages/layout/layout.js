import React from 'react';
import Header from 'client/components/header/header';
import 'assets/styles/common.scss';
import s from './styles.scss';

export default function ({ children }) {
  return (
    <div className={s.wrap}>
      <Header />

      <main>
        {children}
      </main>

      <footer className={s.footer}>
        <nav>
          <a href="/">Links</a>
          <a href="/">Links</a>
          <a href="/">Links</a>
        </nav>
      </footer>
    </div>
  );
}
