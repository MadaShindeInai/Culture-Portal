import React from 'react';
import { Link } from 'react-router-dom';

import './AuthorsList.scss';

const AuthorsList = ({ language, architects }) => {
  return (
    <ul>
      {architects.map((person) => {
        const url = `/authors/${person.path}`;
        return <li
          key={person.id}
        ><Link to={url} 
        className='architects-list__item'
        >{language === 'RU'
          ? person.nameRU
          : language === 'EN'
            ? person.nameEN
            : person.nameBY
            }
            
          </Link></li>
      })}

    </ul >
  )
}

export default AuthorsList;