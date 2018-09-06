import React from 'react'
import Header from '../../components/header'
import s from './styles.scss'

import '../../assets/styles/common.scss';

export default function (props) {
    return (
      <div className={s.wrap}>
          <Header/>

          <main>
              {props.children}
          </main>

          <footer className={s.footer}>
              <nav>
                  <a href="">Links</a>
                  <a href="">Links</a>
                  <a href="">Links</a>
              </nav>
          </footer>
      </div>
    );
}

