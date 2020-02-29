import React from 'react';

import './StyleGuide.scss';

const StyleGuide = ({ language }) => {
  let buttonColorText;
  if (language === 'RU') {
    buttonColorText = 'Кликни по кнопке';
  } else if (language === 'EN') {
    buttonColorText = 'Click to Button';
  } else if (language === 'BE') {
    buttonColorText = 'Васiль';

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
    </div>
  )
}

export default StyleGuide;