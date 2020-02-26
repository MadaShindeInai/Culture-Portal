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
    <div>
      <span>{buttonColorText}</span>
      <p className="decor"><span className="deg1" /><span className="deg2" /><span className="deg3" /></p>

      <span>{buttonColorText}</span>
      <p className="decor"><span className="deg1" /><span className="deg2" /><span className="deg3" /></p>

      <span>{buttonColorText}</span>
      
      <p className="decor"><span className="deg1" /><span className="deg2" /><span className="deg3" /></p>
      <span>{buttonColorText}</span>

      <p className="decor"><span className="deg1" /><span className="deg2" /><span className="deg3" /></p>
      <span>{buttonColorText}</span>

      <p className="decor"><span className="deg1" /><span className="deg2" /><span className="deg3" /></p>
      <span>{buttonColorText}</span>

      <p className="decor"><span className="deg1" /><span className="deg2" /><span className="deg3" /></p>
    </div>
  )
}

export default StyleGuide;