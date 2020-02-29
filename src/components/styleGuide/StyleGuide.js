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
      Neon Button
    </button>
    </div>
    // <div>
    //   <span>{buttonColorText}</span>
    //   <span>{buttonColorText}</span>
    //   <span>{buttonColorText}</span>
    // </div>
  )
}

export default StyleGuide;