import React from 'react';
import Photo from '../../assets/images/bird.jpg';
import './DevelopersPage.scss';

const DevelopersPageBE = () => {
  return (
    <div>
      <h2>Наша команда</h2>
        <div className="developers">
          <div className="developer-container">
            <img
              src={Photo}
              className="developer-container__photo"
              alt="pic"
              width="190"
            />
            <p className="developer-container__name">SIARHEI NIAPRAKHIN</p>
            <a href="https://github.com" target="_blank" rel='noreferrer noopener'>github</a>
            <a href="https://github.com" target="_blank" rel='noreferrer noopener'>Worklog</a>
          </div>
          <div className="developer-container">
            <img
              src={Photo}
              className="developer-container__photo"
              alt="pic"
              width="190"
            />
            <p className="developer-container__name">SIARHEI NIAPRAKHIN</p>
            <a href="https://github.com" target="_blank" rel='noreferrer noopener'>github</a>
            <a href="https://github.com" target="_blank" rel='noreferrer noopener'>Worklog</a>
          </div>
          <div className="developer-container">
            <img
              src={Photo}
              className="developer-container__photo"
              alt="pic"
              width="190"
            />
            <p className="developer-container__name">SIARHEI NIAPRAKHIN</p>
            <a href="https://github.com" target="_blank" rel='noreferrer noopener'>github</a>
            <a href="https://github.com" target="_blank" rel='noreferrer noopener'>Worklog</a>
          </div>
          <div className="developer-container">
            <img
              src={Photo}
              className="developer-container__photo"
              alt="pic"
              width="190"
            />
            <p className="developer-container__name">SIARHEI NIAPRAKHIN</p>
            <a href="https://github.com" target="_blank" rel='noreferrer noopener'>github</a>
            <a href="https://github.com" target="_blank" rel='noreferrer noopener'>Worklog</a>
          </div>
          <div className="developer-container">
            <img
              src={Photo}
              className="developer-container__photo"
              alt="pic"
              width="190"
            />
            <p className="developer-container__name">SIARHEI NIAPRAKHIN</p>
            <a href="https://github.com" target="_blank" rel='noreferrer noopener'>github</a>
            <a href="https://github.com" target="_blank" rel='noreferrer noopener'>Worklog</a>
          </div>

        </div>
    </div>
  )
}

export default DevelopersPageBE;