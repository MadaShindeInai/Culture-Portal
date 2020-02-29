import React from 'react';

import './StyleGuide.scss';

const StyleGuide = ({ language }) => {
  let buttonColorText;
  if (language === 'RU') {
    buttonColorText = 'Вася';
  } else if (language === 'EN') {
    buttonColorText = 'Vasya';
  } else if (language === 'BE') {
    buttonColorText = 'Васiль';

  }
  return (
    <div className='style-container'>
    <button>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Click to Button
    </button>
    </div>
  )
}

export default StyleGuide;