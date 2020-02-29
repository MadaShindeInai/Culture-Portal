import React from 'react';
import './AuthorOfTheDay.scss';
import { Link } from 'react-router-dom';
import Architects from '../../utils/architectsData';

const AuthorOfTheDayRU = ({ language }) => {
  const dayOfYear = Math.floor((Date.now() - Date.parse(new Date().getFullYear(), 0, 0)) / 86400000);
  const maxRange = Architects.length;
  const numberAuthorOfTheDay = (dayOfYear > maxRange)
    ? (dayOfYear - (Math.floor(dayOfYear / maxRange) * maxRange))
    : dayOfYear;

  const currentAuthor = Architects[numberAuthorOfTheDay];

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
        <h2 className="author-of-the-day__title"><svg viewBox="0 0 600 50">
          <symbol id="s-text">
            <text textAnchor="middle"
              x="50%"
              y="68%"
              className="text--line2"
            >
              {authorOfTheDayTitle}
            </text>

          </symbol>

          <g className="g-ants">
            <use xlinkHref="#s-text"
              className="text-copy" />
            <use xlinkHref="#s-text"
              className="text-copy" />
            <use xlinkHref="#s-text"
              className="text-copy" />
            <use xlinkHref="#s-text"
              className="text-copy" />
            <use xlinkHref="#s-text"
              className="text-copy" />
          </g>


        </svg></h2>
        <p className="decor"><span className="deg1" /><span className="deg2" /><span className="deg3" /></p>
        <div className="author-of-the-day__content">
          <img src={currentAuthor.img} alt="author" width="250" />
          <div className="author-of-the-day__description">
            <p>{name}</p>
            <p>{currentAuthor.date}</p>
            <p className="author-of-the-day__biography">{shortBiography}</p>
            <Link className="author-of-the-day__link" to={linkToAuthorPage}>
              {linkToAuthorPageText}
            </Link>
          </div>
        </div>

      </div>

    </div>
  )

}

export default AuthorOfTheDayRU;