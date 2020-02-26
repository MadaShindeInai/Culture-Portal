import React from 'react';

import './AuthorsList.scss';

const AuthorsList = ({ language }) => {

  let authorsListText;
  if (language === 'RU') {
    authorsListText = 'Какой-то автор';
  } else if (language === 'EN') {
    authorsListText = 'Some author';
  } else if (language === 'BE') {
    authorsListText = 'Нейки аутар';
  }
  return (
    <ul>
      <li>{authorsListText}</li>
      <li>{authorsListText}</li>
      <li>{authorsListText}</li>
      <li>{authorsListText}</li>
    </ul>
  )
}

export default AuthorsList;