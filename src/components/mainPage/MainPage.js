import React from 'react';
import AppDescription from '../appDescription';
import AuthorOfTheDay from '../authorOfTheDay'
import './MainPage.scss';

const MainPage = ({ language }) => {

  return (
    <main>
      <AppDescription language={language} />
      <AuthorOfTheDay language={language} />
    </main>
  )

}

export default MainPage;