import React from 'react';

import './StyleGuide.scss';

const StyleGuide = ({ language }) => {
  let buttonColorText;
  let fontText;
  if (language === 'RU') {
    buttonColorText = 'Кликни по кнопке';
    fontText = 'Использовался шрифт'
  } else if (language === 'EN') {
    buttonColorText = 'Click to Button';
    fontText = 'Our font - family style';
  } else if (language === 'BE') {
    buttonColorText = 'Клікні па кнопцы';
    fontText = 'Выкарыстоўваўся шрыфт';
  }
  return (
    <div className='style-container'>
      <div className='style-btn'>
        <button>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {buttonColorText}
        </button>
      </div>

      <div className='style-btn'>
        <button>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {buttonColorText}
        </button>
      </div>

      <div className='style-font'>
        {fontText}: Futura MediumC
      </div>
    </div>
  )
}

export default StyleGuide;