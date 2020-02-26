import React from 'react';

import './PersonPage.scss';

const PersonPage = ({ language }) => {
  let name;
  let authorPhoto;
  let YearsOflife;
  let ShortBiography;
  if (language === 'RU') {
    name = 'Вася';
    YearsOflife = '1567г-1974г';
    ShortBiography = 'Родился, жил, умер';
  } else if (language === 'EN') {
    name = 'Vasya';
    YearsOflife = '1567-1974';
    ShortBiography = 'Born, lived and died';
  } else if (language === 'BE') {
    name = 'Васiль';
    YearsOflife = '1567г-1974г';
    ShortBiography = 'Нарадзіўся, жыў і памёр';
  }
  return (
    <ul>
      <li>{name}</li>
      <li>{authorPhoto}</li>
      <li>{YearsOflife}</li>
      <li>{ShortBiography}</li>
    </ul>
  )
}

export default PersonPage;