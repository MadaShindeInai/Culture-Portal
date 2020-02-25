import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const HeaderBE = ({ setLanguage }) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Дамой</Link>
          </li>
          <li>
            <Link to='/authors'>Архитэктары</Link>
          </li>
          <li>
            <Link to='/styleguide'>Стайлгайд</Link>
          </li>
          <li>
            <Link to='/developers'>Распрацоушчыки</Link>
          </li>
          <li>
            <button
              type="button"
              onClick={() => setLanguage('RU')}
            >РУ</button>
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

export default HeaderBE;