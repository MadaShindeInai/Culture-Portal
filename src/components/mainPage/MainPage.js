import React from 'react';
import AppDescription from '../appDescription';
import AuthorOfTheDay from '../authorOfTheDay'
import './MainPage.scss';

const MainPage = ({ language, dayOfTheWeek }) => {

  return (
    <main>
      <AppDescription language={language} />
      <AuthorOfTheDay language={language} dayOfTheWeek={dayOfTheWeek} />
    </main>
  )

}

export default MainPage;