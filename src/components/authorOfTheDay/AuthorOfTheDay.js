import React from 'react';
import './AuthorOfTheDay.scss';

const AuthorOfTheDayRU = ({ language }) => {

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
    <div>
      <img src={authorPhoto} alt="author" />
      <div>
        <p>{name}</p>
        <p>{YearsOflife}</p>
        <p>{ShortBiography}</p>

      </div>

    </div>
  )

}

export default AuthorOfTheDayRU;