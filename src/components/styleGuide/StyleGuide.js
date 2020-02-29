import React from 'react';

import './StyleGuide.scss';

const StyleGuide = ({ language }) => {
  let buttonColorText;
  let fontText;
  let colorText;
  let margin;
  let used;
  if (language === 'RU') {
    buttonColorText = 'Кликни по кнопке';
    fontText = 'Использовался шрифт';
    colorText = 'Главный цвет';
    margin = 'Все верхние отступы';
    used = 'Использовались'
  } else if (language === 'EN') {
    buttonColorText = 'Click to Button';
    fontText = 'Our font - family style';
    colorText = 'Main color';
    margin = 'All margin - bottoms of projects';
    used = 'Was used'
  } else if (language === 'BE') {
    buttonColorText = 'Клікні па кнопцы';
    fontText = 'Выкарыстоўваўся шрыфт';
    colorText = 'Галоўны колер';
    margin = 'Увесь запас - дні праектаў';
    used = 'Выкарысталіся'

  }
  return (
    <div className='style-container'>
      <div className='style-btn'>
        <button className='style-btn_neon'>
          <span class='span-neon'></span>
          <span class='span-neon'></span>
          <span class='span-neon'></span>
          <span class='span-neon'></span>
          {buttonColorText}
        </button>
      </div>

      <div className='style-btn'>
      <button className='style-btn_neon'>
      <span class='span-neon'></span>
      <span class='span-neon'></span>
      <span class='span-neon'></span>
      <span class='span-neon'></span>
          {buttonColorText}
        </button>
      </div>

      <div className='style-font'>
        {fontText}: Futura MediumC
      </div>

      <div className='style-font'>
        {colorText}:  #17a2b8
      </div>

      <div className='style-font'>
        {margin}: 25px;
      </div>

      <div className='style-font'>
        {used}: React-Bootstrap
      </div>
      <div className='style-font'>
        {used}: React-Leaflet
      </div>
      <div className='style-font'>
        {used}: Google Map
      </div>
    </div>
  )
}

export default StyleGuide;