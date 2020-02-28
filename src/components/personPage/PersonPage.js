import React, { useState } from 'react';
import { Timeline, Table, Carousel, Modal } from 'antd';
import { YoutubeOutlined } from '@ant-design/icons';
import { Map, Marker, TileLayer } from 'react-leaflet';
import Architects from '../../utils/architectsData';

import './PersonPage.scss';

const PersonPage = ({ language, id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentAuthor = Architects.find(person => person.path === id);

  const lang = language === 'BE' ? 'BY' : language;

  const projectTitles = {
    date: { BY: 'Дата', RU: 'Дата', EN: 'Date' },
    text: { BY: 'Апiсанне', RU: 'Описание', EN: 'Description' }
  };

  const projects = currentAuthor.projects.map((item, index) => ({
    date: item.date,
    text: item[`text${lang}`],
    key: index
  }));
  const projectColumns = [
    {
      title: projectTitles.date[lang],
      dataIndex: 'date',
      key: 'date'
    },
    {
      title: projectTitles.text[lang],
      dataIndex: 'text',
      key: 'text'
    }
  ];
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
              <Timeline.Item key={item.textBY}>
                <h4>{item.date}</h4>
                <p>{item[`text${lang}`]}</p>
              </Timeline.Item>
            ))}
          </Timeline>
        </div>
      </div>
      <div className="info-container__item info-container__info-carousel">
        <Carousel autoplay>
          {currentAuthor.projects.map(item => (
            <div key={item[`text${lang}`]}>
              <img src={item.image} alt="example projects" key={item.image} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="info-container__item info-container__info-table">
        <Table
          dataSource={projects}
          columns={projectColumns}
          pagination={false}
        />
      </div>

      {currentAuthor.videoId && (
        <div className="info-container__item">
          <div>
            <button
              className="info-container__video-button"
              type="button"
              onClick={() => setIsModalOpen(true)}
            >
              <YoutubeOutlined />
            </button>

            <Modal
              visible={isModalOpen}
              closable={false}
              onCancel={() => setIsModalOpen(false)}
            >
              <iframe
                width="560"
                height="315"
                src={currentAuthor.videoId}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Modal>
          </div>
        </div>
      )}

      <div className="info-container__item-map">
        <Map
          center={currentAuthor.projects[0].position}
          zoom={12}
          easeLinearity={0.35}
        >
          <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
          {currentAuthor.projects.map(item => (
            <Marker key={item.position} position={item.position} />
          ))}
        </Map>
      </div>
    </div>
  );
};

export default PersonPage;
