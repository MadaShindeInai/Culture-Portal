import React from 'react';
import { SearchPanelBE, SearchPanelRU, SearchPanelEN } from '../searchPanel';
import { AuthorsListRU, AuthorsListEN, AuthorsListBE } from '../authorsList';

import './AuthorsListPage.scss';

const AuthorsListPage = ({ language }) => {
  let searchPanel;
  let authorsList;
  if (language === 'RU') {
    searchPanel = <SearchPanelRU />;
    authorsList = <AuthorsListRU />;
  } else if (language === 'EN') {
    searchPanel = <SearchPanelEN />;
    authorsList = <AuthorsListEN />;
  } else if (language === 'BE') {
    searchPanel = <SearchPanelBE />;
    authorsList = <AuthorsListBE />;
  }
  return (
    <>
      {searchPanel}
      {authorsList}
    </>
  )
}

export default AuthorsListPage;