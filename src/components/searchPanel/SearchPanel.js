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
    <div className="main__search input-group mb-3">
      <input
        type="text"
        placeholder={placeholderText}
        className="main__search-input form-control"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className="input-group-append">
        <button type="button"
          className="main__search-clear-btn"
          onClick={() => setInputValue('')}
        >{buttonText}</button>
      </div>

    </div>


  );
};

export default SearchPanel;
