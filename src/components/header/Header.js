import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = ({ language, setLanguage }) => {
  let appTitleText;
  let enButton;
  let ruButton;
  let beButton;
  let mainLink;
  let authorsLink;
  let slyleGuideLink;
  let ourTeamLink;


  if (language === 'RU') {
    appTitleText = 'Архитекторы Беларуси';
    enButton = 'АНГ';
    ruButton = 'РУС';
    beButton = 'БЕЛ';
    mainLink = 'Главная';
    authorsLink = 'Архитекторы';
    slyleGuideLink = 'Стайлгайд';
    ourTeamLink = 'Наша команда';
  } else if (language === 'EN') {
    appTitleText = 'Architects of Belarus';
    enButton = 'ENG';
    ruButton = 'RUS';
    beButton = 'BEL';
    mainLink = 'Home';
    authorsLink = 'Architects';
    slyleGuideLink = 'Styleguide';
    ourTeamLink = 'Our Team';
  } else if (language === 'BE') {
    appTitleText = 'Архітэктары Беларусі';
    enButton = 'АНГ';
    ruButton = 'РУС';
    beButton = 'БЕЛ';
    mainLink = 'Галоўная';
    authorsLink = 'Архітэктары';
    slyleGuideLink = 'Стайлгайд';
    ourTeamLink = 'Наша каманда';
  }

  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__logo">{appTitleText}</h1>
        <div className="header__language">

          <button type="button"
            onClick={() => setLanguage('RU')}>{ruButton}</button>
          <button type="button"
            onClick={() => setLanguage('EN')}>{enButton}</button>
          <button type="button"
            onClick={() => setLanguage('BE')}>{beButton}</button>
        </div>
      </div>

      <nav>
        <ul className="header__nav">
          <li className="header__item">
            <Link to="/">{mainLink}</Link>
          </li>
          <li className="header__item">
            <Link to='/authors'>{authorsLink}</Link>
          </li>
          <li className="header__item">
            <Link to='/styleguide'>{slyleGuideLink}</Link>
          </li>
          <li className="header__item">
            <Link to='/developers'>{ourTeamLink}</Link>
          </li>
        </ul>
      </nav>
    </header>
  )

}

export default Header;