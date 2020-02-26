import React from 'react';
import PhotoDaria from '../../assets/images/dariavv.jpg';
import Deeamon from '../../assets/images/deeamon.jpg';
import Max from '../../assets/images/max.jpg';
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
    thirdDeveloperName = 'Анастасия Носевич';
    forthDeveloperName = 'Максим Деменков';
    fifthDeveloperName = 'Марина Сугутова';
    linkToGithub = 'Ссылка на GitHub';
    linkToWorklog = 'Ссылка на Worklog';
  } else if (language === 'EN') {
    titleText = 'Our team';
    firstDeveloperName = 'Darya Sidarovich';
    secondDeveloperName = 'Siarhei Niaprakhin';
    thirdDeveloperName = 'Anastasya Nasevich';
    forthDeveloperName = 'Maxim Demenkov';
    fifthDeveloperName = 'Marina Sugutova';
    linkToGithub = 'Link to GitHub';
    linkToWorklog = 'Link to Worklog';
  } else if (language === 'BE') {
    titleText = 'Наша каманда';
    firstDeveloperName = 'Дар`я Сідаровіч';
    secondDeveloperName = 'Сяргей Няпрахiн';
    thirdDeveloperName = 'Анастасiя Насевіч';
    forthDeveloperName = 'Максiм Дземянкоў';
    fifthDeveloperName = 'Марына Сугутава';
    linkToGithub = 'Спасылка на GitHub';
    linkToWorklog = 'Спасылка на Worklog';
  }
  return (
    <div>
      <h2>{titleText}</h2>
      <div className="developers">
        <div className="developer-container">
          <img
            src={PhotoDaria}
            className="developer-container__photo"
            alt="pic"
            width="190"
          />
          <p className="developer-container__name">{firstDeveloperName}</p>
          <a href="https://github.com/dariavv" target="_blank" rel='noreferrer noopener'>{linkToGithub}</a>
          <a href="https://github.com" target="_blank" rel='noreferrer noopener'>{linkToWorklog}</a>
        </div>
        <div className="developer-container">
          <img
            src='https://sun2.cosmostv-by-minsk.userapi.com/c845219/v845219353/1b0e9c/nZ1HrrJ3aUc.jpg?ava=1'
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
            src='https://avatars1.githubusercontent.com/u/54587368?s=460&v=4'
            className="developer-container__photo"
            alt="pic"
            width="190"
          />
          <p className="developer-container__name">{thirdDeveloperName}</p>
          <a href="https://github.com/Anastasya1701" target="_blank" rel='noreferrer noopener'>{linkToGithub}</a>
          <a href="https://github.com" target="_blank" rel='noreferrer noopener'>{linkToWorklog}</a>
        </div>
        <div className="developer-container">
          <img
            src={Max}
            className="developer-container__photo"
            alt="pic"
            width="190"
          />
          <p className="developer-container__name">{forthDeveloperName}</p>
          <a href="https://github.com/MaxDeMaW" target="_blank" rel='noreferrer noopener'>{linkToGithub}</a>
          <a href="https://github.com" target="_blank" rel='noreferrer noopener'>{linkToWorklog}</a>
        </div>
        <div className="developer-container">
          <img
            src={Deeamon}
            className="developer-container__photo"
            alt="pic"
            width="190"
          />
          <p className="developer-container__name">{fifthDeveloperName}</p>
          <a href="https://github.com/Deeamon" target="_blank" rel='noreferrer noopener'>{linkToGithub}</a>
          <a href="https://github.com" target="_blank" rel='noreferrer noopener'>{linkToWorklog}</a>
        </div>

      </div>
    </div>
  )
}

export default DevelopersPageBE;