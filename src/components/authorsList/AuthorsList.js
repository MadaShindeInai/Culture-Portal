import React from 'react';
import { Link } from 'react-router-dom';
import Architects from '../../utils/architectsData';

import './AuthorsList.scss';

const AuthorsList = ({ language }) => {

  return (
    <ul className="architects-list__container">
      {Architects.map((person) => {
        const url = `/authors/${person.path}`;
        return <li
          className="architects-list__item"
          key={person.id}
        ><Link to={url} >{language === 'RU'
          ? person.nameRU
          : language === 'EN'
            ? person.nameEN
            : person.nameBY}
          </Link></li>
      })}
    </ul >
  )
}

export default AuthorsList;