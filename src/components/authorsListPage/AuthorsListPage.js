import React from 'react';
import SearchPanel from '../searchPanel';
import AuthorsList from '../authorsList';
import Architects from '../../utils/architectsData';
import { useState } from 'react';
import './AuthorsListPage.scss';


const AuthorsListPage = ({ language }) => {

  const [selectedArchitects, setSectedArchitects] = useState(Architects);
  return (
    <>
      <SearchPanel
        language={language}
        setlinksAuthors={setSectedArchitects}
      />
      <AuthorsList language={language}
                   architects={selectedArchitects}
      />
    </>
  );
};

export default AuthorsListPage;
