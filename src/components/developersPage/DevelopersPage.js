import React from 'react';
import { GithubOutlined, FileWordOutlined } from '@ant-design/icons';
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
  if (language === 'RU') {
    titleText = 'Наша команда';
    firstDeveloperName = 'Дарья Сидорович';
    secondDeveloperName = 'Сергей Непряхин';
    thirdDeveloperName = 'Анастасия Носевич';
    forthDeveloperName = 'Максим Деменков';
    fifthDeveloperName = 'Марина Сугутова';
  } else if (language === 'EN') {
    titleText = 'Our team';
    firstDeveloperName = 'Darya Sidarovich';
    secondDeveloperName = 'Siarhei Niaprakhin';
    thirdDeveloperName = 'Anastasya Nasevich';
    forthDeveloperName = 'Maxim Demenkov';
    fifthDeveloperName = 'Marina Sugutova';
  } else if (language === 'BE') {
    titleText = 'Наша каманда';
    firstDeveloperName = 'Дар`я Сідаровіч';
    secondDeveloperName = 'Сяргей Няпрахiн';
    thirdDeveloperName = 'Анастасiя Насевіч';
    forthDeveloperName = 'Максiм Дземянкоў';
    fifthDeveloperName = 'Марына Сугутава';
  }
  return (
    <div className="developers">
      <h2 className="developers__title"><svg viewBox="0 0 600 50">
        <symbol id="s-text">
          <text textAnchor="middle"
            x="50%"
            y="68%"
            className="text--line2"
          >
            {titleText}
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
      <div className="developers__block">
        <div className="developer-container">
          <img
            src={PhotoDaria}
            className="developer-container__photo"
            alt="pic"
            width="190"
          />
          <p className="developer-container__name">{firstDeveloperName}</p>
          <div className="developer-container__links">
            <a className="developer-container__link" href="https://github.com/dariavv" target="_blank" rel='noreferrer noopener'><GithubOutlined /></a>
            <a className="developer-container__link" href="https://github.com/MadaShindeInai/Culture-Portal/blob/master/README.md" target="_blank" rel='noreferrer noopener'><FileWordOutlined /></a>
          </div>
        </div>
        <div className="developer-container">
          <img
            src='https://sun2.cosmostv-by-minsk.userapi.com/c845219/v845219353/1b0e9c/nZ1HrrJ3aUc.jpg?ava=1'
            className="developer-container__photo"
            alt="pic"
            width="190"
          />
          <p className="developer-container__name">{secondDeveloperName}</p>
          <div className="developer-container__links">
            <a className="developer-container__link" href="https://github.com/MadaShindeInai" target="_blank" rel='noreferrer noopener'><GithubOutlined /></a>
            <a className="developer-container__link" href="https://github.com/MadaShindeInai/Culture-Portal/blob/master/README.md" target="_blank" rel='noreferrer noopener'><FileWordOutlined /></a>
          </div>
        </div>
        <div className="developer-container">
          <img
            src='https://avatars1.githubusercontent.com/u/54587368?s=460&v=4'
            className="developer-container__photo"
            alt="pic"
            width="190"
          />
          <p className="developer-container__name">{thirdDeveloperName}</p>
          <div className="developer-container__links">
            <a className="developer-container__link" href="https://github.com/Anastasya1701" target="_blank" rel='noreferrer noopener'><GithubOutlined /></a>
            <a className="developer-container__link" href="https://github.com/MadaShindeInai/Culture-Portal/blob/master/README.md" target="_blank" rel='noreferrer noopener'><FileWordOutlined /></a>
          </div>
        </div>
        <div className="developer-container">
          <img
            src={Max}
            className="developer-container__photo"
            alt="pic"
            width="190"
          />
          <p className="developer-container__name">{forthDeveloperName}</p>
          <div className="developer-container__links">
            <a className="developer-container__link" href="https://github.com/MaxDeMaW" target="_blank" rel='noreferrer noopener'><GithubOutlined /></a>
            <a className="developer-container__link" href="https://github.com/MadaShindeInai/Culture-Portal/blob/master/README.md" target="_blank" rel='noreferrer noopener'><FileWordOutlined /></a>
          </div>
        </div>
        <div className="developer-container">
          <img
            src={Deeamon}
            className="developer-container__photo"
            alt="pic"
            width="190"
          />
          <p className="developer-container__name">{fifthDeveloperName}</p>
          <div className="developer-container__links">
            <a className="developer-container__link" href="https://github.com/Deeamon" target="_blank" rel='noreferrer noopener'><GithubOutlined /></a>
            <a className="developer-container__link" href="https://github.com/MadaShindeInai/Culture-Portal/blob/master/README.md" target="_blank" rel='noreferrer noopener'><FileWordOutlined /></a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default DevelopersPageBE;