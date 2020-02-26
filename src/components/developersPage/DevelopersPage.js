import React from 'react';
import Photo from '../../assets/images/bird.jpg';
import './DevelopersPage.scss';

const DevelopersPageBE = ({ language }) => {
  let titleText;
  let firstDeveloperName;
  let secondDeveloperName;
  let thirdDeveloperName;
  let forthDeveloperName;
  let fifthDeveloperName;
  let linkToGithub;
  let linkToWorklog;
  if (language === 'RU') {
    titleText = 'Наша команда';
    firstDeveloperName = 'Дарья Сидорович';
    secondDeveloperName = 'Сергей Непряхин';
    thirdDeveloperName = 'Анастасия ';
    forthDeveloperName = 'Максим Деменков';
    fifthDeveloperName = 'Марина ';
    linkToGithub = 'Ссылка на GitHub';
    linkToWorklog = 'Ссылка на Worklog';
  } else if (language === 'EN') {
    titleText = 'Our team';
    firstDeveloperName = 'Darya Sidarovich';
    secondDeveloperName = 'Siarhei Niaprakhin';
    thirdDeveloperName = 'Anastasya';
    forthDeveloperName = 'Maxim Demenkov';
    fifthDeveloperName = 'Maryna';
    linkToGithub = 'Link to GitHub';
    linkToWorklog = 'Link to Worklog';
  } else if (language === 'BE') {
    titleText = 'Наша каманда';
    firstDeveloperName = 'Дар`я Сідаровіч';
    secondDeveloperName = 'Сяргей Няпрахiн';
    thirdDeveloperName = 'Анастасiя';
    forthDeveloperName = 'Максiм Дземянкоў';
    fifthDeveloperName = 'Марына';
    linkToGithub = 'Спасылка на GitHub';
    linkToWorklog = 'Спасылка на Worklog';
  }
  return (
    <div>
      <h2>{titleText}</h2>
      <div className="developers">
        <div className="developer-container">
          <img
            src={Photo}
            className="developer-container__photo"
            alt="pic"
            width="190"
          />
          <p className="developer-container__name">{firstDeveloperName}</p>
          <a href="https://github.com" target="_blank" rel='noreferrer noopener'>{linkToGithub}</a>
          <a href="https://github.com" target="_blank" rel='noreferrer noopener'>{linkToWorklog}</a>
        </div>
        <div className="developer-container">
          <img
            src={Photo}
            className="developer-container__photo"
            alt="pic"
            width="190"
          />
          <p className="developer-container__name">{secondDeveloperName}</p>
          <a href="https://github.com" target="_blank" rel='noreferrer noopener'>{linkToGithub}</a>
          <a href="https://github.com" target="_blank" rel='noreferrer noopener'>{linkToWorklog}</a>
        </div>
        <div className="developer-container">
          <img
            src={Photo}
            className="developer-container__photo"
            alt="pic"
            width="190"
          />
          <p className="developer-container__name">{thirdDeveloperName}</p>
          <a href="https://github.com" target="_blank" rel='noreferrer noopener'>{linkToGithub}</a>
          <a href="https://github.com" target="_blank" rel='noreferrer noopener'>{linkToWorklog}</a>
        </div>
        <div className="developer-container">
          <img
            src={Photo}
            className="developer-container__photo"
            alt="pic"
            width="190"
          />
          <p className="developer-container__name">{forthDeveloperName}</p>
          <a href="https://github.com" target="_blank" rel='noreferrer noopener'>{linkToGithub}</a>
          <a href="https://github.com" target="_blank" rel='noreferrer noopener'>{linkToWorklog}</a>
        </div>
        <div className="developer-container">
          <img
            src={Photo}
            className="developer-container__photo"
            alt="pic"
            width="190"
          />
          <p className="developer-container__name">{fifthDeveloperName}</p>
          <a href="https://github.com" target="_blank" rel='noreferrer noopener'>{linkToGithub}</a>
          <a href="https://github.com" target="_blank" rel='noreferrer noopener'>{linkToWorklog}</a>
        </div>

      </div>
    </div>
  )
}

export default DevelopersPageBE;