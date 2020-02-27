import React from 'react';
import { Timeline, Table, Carousel } from 'antd';
import Architects from '../../utils/architectsData';

import './PersonPage.scss';

const PersonPage = ({ language, id }) => {
  const currentAuthor = Architects.find(person => person.path === id);

  const lang = language === 'BE' ? 'BY' : language;

  const projectTitles = {
    date: { BY: 'Дата', RU: 'Дата', EN: 'Date' },
    text: { BY: 'Апiсанне', RU: 'Описание', EN: 'Description' }
  };
  return (
    <div className="info-container">
      <div className="info-container__wrapper">
        <div className="info-container__about">
          <h2 className="info-container__name">
            {currentAuthor[`name${lang}`]}
          </h2>
          <div className="info-container__item">
            <img
              className="info-container__image"
              src={currentAuthor.img}
              alt="architector"
              width="250"
            />
          </div>
          <div className="info-container__item">
            <h4 className="info-container__date">{currentAuthor.date}</h4>
          </div>
          <div className="info-container__item">
            <p className="info-container__description">
              {currentAuthor[`description${lang}`]}
            </p>
          </div>
        </div>
        <div className="info-container__item info-container__info-timeline">
          <Timeline>
            {currentAuthor.timelineData.map(item => (
              <Timeline.Item key={item.date}>
                <h4>{item.date}</h4>
                <p>{item[`text${lang}`]}</p>
              </Timeline.Item>
            ))}
          </Timeline>
        </div>
      </div>
      <div className="info-container__item info-container__info-table">
        <Table
          dataSource={projects}
          columns={projectColumns}
          pagination={false}
        />
      </div>
      <div className="info-container__item">Галерея или Слайдер</div>
      <div className="info-container__item">Видео</div>
      <div className="info-container__item">Карта</div>
    </div>
  );
};

export default PersonPage;
