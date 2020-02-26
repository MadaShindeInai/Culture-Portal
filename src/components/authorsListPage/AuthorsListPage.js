import React from 'react';
import SearchPanel from '../searchPanel';
import AuthorsList from '../authorsList';

import './AuthorsListPage.scss';

const AuthorsListPage = ({ language }) => {

  return (
    <>
      <SearchPanel language={language} />
      <AuthorsList language={language} />
    </>
  )
}

export default AuthorsListPage;