import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const HeaderRU = ({ setLanguage }) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Домой</Link>
          </li>
          <li>
            <Link to='/authors'>Архитекторы</Link>
          </li>
          <li>
            <Link to='/styleguide'>Стайлгайд</Link>
          </li>
          <li>
            <Link to='/developers'>Разработчики</Link>
          </li>
          <li>
            <button
              type="button"
              onClick={() => setLanguage('BE')}
            >БЕЛ</button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => setLanguage('EN')}
            >АНГЛ</button>
          </li>
        </ul>
      </nav>

    </header>
  )

}

export default HeaderRU;