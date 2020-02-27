import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import Dropdown from 'react-bootstrap/Dropdown';

const Header = ({ language, setLanguage }) => {
  let appTitleText;
  let enButton;
  let ruButton;
  let beButton;
  let mainLink;
  let authorsLink;
  let slyleGuideLink;
  let ourTeamLink;
  let changeLanguage;

  if (language === 'RU') {
    appTitleText = 'Архитекторы Беларуси';
    enButton = 'АНГ';
    ruButton = 'РУС';
    beButton = 'БЕЛ';
    mainLink = 'Главная';
    authorsLink = 'Архитекторы';
    slyleGuideLink = 'Стайлгайд';
    ourTeamLink = 'Наша команда';
    changeLanguage = 'Сменить язык';
  } else if (language === 'EN') {
    appTitleText = 'Architects of Belarus';
    enButton = 'ENG';
    ruButton = 'RUS';
    beButton = 'BEL';
    mainLink = 'Home';
    authorsLink = 'Architects';
    slyleGuideLink = 'Styleguide';
    ourTeamLink = 'Our Team';
    changeLanguage = 'Change language';
  } else if (language === 'BE') {
    appTitleText = 'Архітэктары Беларусі';
    enButton = 'АНГ';
    ruButton = 'РУС';
    beButton = 'БЕЛ';
    mainLink = 'Галоўная';
    authorsLink = 'Архітэктары';
    slyleGuideLink = 'Стайлгайд';
    ourTeamLink = 'Наша каманда';
    changeLanguage = 'Змяніць мову';
  }

  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__logo">{appTitleText}</h1>
        <Dropdown>
          <Dropdown.Toggle variant="info" id="dropdown-basic">
            {changeLanguage}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item className="header__dropdown-btn" as="button" onClick={() => setLanguage('RU')}>{ruButton}</Dropdown.Item>
            <Dropdown.Item className="header__dropdown-btn" as="button" onClick={() => setLanguage('EN')}>{enButton}</Dropdown.Item>
            <Dropdown.Item className="header__dropdown-btn" as="button" onClick={() => setLanguage('BE')}>{beButton}</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
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