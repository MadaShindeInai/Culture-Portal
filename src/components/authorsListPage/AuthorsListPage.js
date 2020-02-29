import React, { useState } from 'react';
import SearchPanel from '../searchPanel';
import AuthorsList from '../authorsList';
import Architects from '../../utils/architectsData';
import './AuthorsListPage.scss';


const AuthorsListPage = ({ language }) => {

  let searchKey = `nameRU`;
  if (language === 'BE') {
    searchKey = `nameBY`;
  } else {
    searchKey = `name${language}`
  }

  const [inputValue, setInputValue] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [architects, setArchitects] = useState(Architects);
  const search = () => {
    if (inputValue.length === 0) {
      return architects;
    }
    return architects.filter((item) => item[searchKey].toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
  };
  const visibleItems = search();


  return (
    <div className="main__authors">
      <SearchPanel
        language={language}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <AuthorsList language={language}
        architects={visibleItems}
      />
    </div>
  );
};

export default AuthorsListPage;
