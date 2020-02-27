import React from 'react';
import './SearchPanel.scss';

const SearchPanel = ({ language, setInputValue, inputValue }) => {

  let placeholderText;
  let buttonText;

  if (language === 'RU') {
    placeholderText = 'Введите запрос';
    buttonText = 'Очистить';
  } else if (language === 'EN') {
    placeholderText = 'Enter your request';
    buttonText = 'Clear';
  } else if (language === 'BE') {
    placeholderText = 'Увядзіце свой запыт';
    buttonText = 'Ачысціць';
  }
  return (
    <div>
      <input
        type="text"
        placeholder={placeholderText}
        name="searchInput"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="button"
        onClick={() => setInputValue('')}
      >{buttonText}</button>
    </div>
  );
};

export default SearchPanel;
