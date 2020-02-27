import React from 'react';
import './SearchPanel.scss';
import Architects from '../../utils/architectsData';

const selectAuthors = (param, setlinksAuthors, language) => e => {
  let sortedArrayAuthors = Architects;


  let searchKey = `nameRU`;
  if (language === 'BE') {
    searchKey = `nameBY`;
  } else {
    searchKey = `name${language}`
  }

  sortedArrayAuthors = Architects.filter(item => {
    return item[searchKey].indexOf(e.target.value) > -1;
  });

  if (sortedArrayAuthors.length > 0) {
    setlinksAuthors(sortedArrayAuthors);
  } else {
    setlinksAuthors([]);
  }
};

const clearInput = () => {
  console.log('Очистка')
}


const SearchPanel = ({ language, setlinksAuthors }) => {
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
      <form onSubmit={clearInput}>
      <input
        type="text"
        placeholder={placeholderText}
        name="searchInput"
        onChange={selectAuthors(this, setlinksAuthors, language)}
      />
      <button type="submit">{buttonText}</button>
      </form>
    </div>
  );
};

export default SearchPanel;
