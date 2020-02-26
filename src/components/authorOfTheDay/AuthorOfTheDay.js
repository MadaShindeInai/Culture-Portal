import React from 'react';
import './AuthorOfTheDay.scss';
import { Link } from 'react-router-dom';
import Architects from '../../utils/architectsData';

const AuthorOfTheDayRU = ({ language, dayOfTheWeek }) => {
  const currentAuthor = Architects[dayOfTheWeek];

  let name;
  let shortBiography;
  let authorOfTheDayTitle;
  let linkToAuthorPageText;
  const linkToAuthorPage = `/authors/${currentAuthor.path}`
  if (language === 'RU') {
    name = currentAuthor.nameRU;
    shortBiography = currentAuthor.descriptionRU;
    authorOfTheDayTitle = 'Архитектор Дня';
    linkToAuthorPageText = 'Перейти на страницу автора';
  } else if (language === 'EN') {
    name = currentAuthor.nameEN;
    shortBiography = currentAuthor.descriptionEN;
    authorOfTheDayTitle = 'Architect of the Day';
    linkToAuthorPageText = 'Go to author page';
  } else if (language === 'BE') {
    name = currentAuthor.nameBY;
    shortBiography = currentAuthor.descriptionBY;
    authorOfTheDayTitle = 'Архітэктар Дня';
    linkToAuthorPageText = 'Перайсці на старонку аўтара';
  }
  return (
    <div className="author-of-the-day">
      <div className="author-of-the-day__wrapper">
        <h2 className="author-of-the-day__title">{authorOfTheDayTitle}</h2>
        <p className="decor"><span className="deg1" /><span className="deg2" /><span className="deg3" /></p>
        <div className="author-of-the-day__content">
          <img src={currentAuthor.img} alt="author" width="250" />
          <div className="author-of-the-day__description">
            <p>{name}</p>
            <p>{currentAuthor.date}</p>
            <p className="author-of-the-day__biography">{shortBiography}</p>
            <Link className="author-of-the-day__link" to={linkToAuthorPage}>{linkToAuthorPageText}</Link>
          </div>
        </div>

      </div>

    </div>
  )

}

export default AuthorOfTheDayRU;