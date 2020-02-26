import React from 'react';
import './AuthorOfTheDay.scss';
import Photo from '../../assets/images/bird.jpg'

const AuthorOfTheDayRU = ({ language }) => {

  let name;
  let yearsOflife;
  let shortBiography;
  let authorOfTheDayTitle;
  if (language === 'RU') {
    name = 'Вася';
    yearsOflife = '1567г-1974г';
    shortBiography = 'Родился, жил, умер';
    authorOfTheDayTitle = 'Архитектор Дня';
  } else if (language === 'EN') {
    name = 'Vasya';
    yearsOflife = '1567-1974';
    shortBiography = 'Born, lived and died';
    authorOfTheDayTitle = 'Architect of the Day';
  } else if (language === 'BE') {
    name = 'Васiль';
    yearsOflife = '1567г-1974г';
    shortBiography = 'Нарадзіўся, жыў і памёр';
    authorOfTheDayTitle = 'Архітэктар Дня';
  }
  return (
    <div className="author-of-the-day">
      <div className="author-of-the-day__wrapper">
        <h2 className="author-of-the-day__title">{authorOfTheDayTitle}</h2>
        <p className="decor"><span className="deg1" /><span className="deg2" /><span className="deg3" /></p>
        <div className="author-of-the-day__content">
          <img src={Photo} alt="author" width="250" />
          <div className="author-of-the-day__description">
            <p>{name}</p>
            <p>{yearsOflife}</p>
            <p>{shortBiography}</p>
          </div>
        </div>

      </div>

    </div>
  )

}

export default AuthorOfTheDayRU;