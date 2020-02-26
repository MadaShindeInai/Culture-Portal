import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const HeaderRU = ({ setLanguage }) => {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__logo">Architects of Belarus</h1>
        <div className="header__language">
      
      <button type="button"
              onClick={() => setLanguage('EN')}>EN</button>
      <button type="button"
              onClick={() => setLanguage('RU')}>RU</button>
      <button type="button"
              onClick={() => setLanguage('BE')}>BY</button>
        </div>
      </div>

        <nav>
        <ul className="header__nav">
          <li className="header__item">
            <Link to="/">Главная</Link>
          </li>
          <li className="header__item">
            <Link to='/authors'>Архитекторы</Link>
          </li>
          <li className="header__item">
            <Link to='/styleguide'>Стайлгайд</Link>
          </li>
          <li className="header__item">
            <Link to='/developers'>Наша команда</Link>
          </li>
        </ul>
      </nav>
    </header>
  )

}

export default HeaderRU;