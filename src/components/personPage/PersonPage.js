import React from 'react';
import Architects from '../../utils/architectsData';

import './PersonPage.scss';

const PersonPage = ({ language, id }) => {
  const currentAuthor = Architects.filter((person) => person.path === id);
  const currentAuthorObj = currentAuthor[0];

  let name;
  let architectPhoto;
  let date;
  let description;
  if (language === 'RU') {
    name = currentAuthorObj.nameRU;
    architectPhoto = currentAuthorObj.img;
    date = currentAuthorObj.date;
    description = currentAuthorObj.descriptionRU;
  } else if (language === 'EN') {
    name = currentAuthorObj.nameEN;
    architectPhoto = currentAuthorObj.img;
    date = currentAuthorObj.date;
    description = currentAuthorObj.descriptionEN;
  } else if (language === 'BE') {
    name = currentAuthorObj.nameBY;
    architectPhoto = currentAuthorObj.img;
    date = currentAuthorObj.date;
    description = currentAuthorObj.descriptionBY;
  }
  return (
    <div className="info-container">
      <div className="info-container__item">
        <h2 className="info-container__name">{name}</h2>
      </div>
      <div className="info-container__item">
        <img className="info-container__image"
          src={architectPhoto} alt="photo" width="250" />
      </div>
      <div className="info-container__item">
        <h4 className="info-container__date">{date}</h4>
      </div>
      <div className="info-container__item">
        <p className="info-container__description">{description}</p>
      </div>
      <div className="info-container__item">Timeline</div>
      <div className="info-container__item">Проекты</div>
      <div className="info-container__item">Галерея или Слайдер</div>
      <div className="info-container__item">Видео</div>
      <div className="info-container__item">Карта</div>
    </div>
  )
}

export default PersonPage;