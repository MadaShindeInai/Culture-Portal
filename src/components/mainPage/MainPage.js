import React from 'react';
import { AppDescriptionBE, AppDescriptionRU, AppDescriptionEN } from '../appDescription';
import { AuthorOfTheDayBE, AuthorOfTheDayRU, AuthorOfTheDayEN } from '../authorOfTheDay'
import './MainPage.scss';

const MainPage = ({ language }) => {
  let appDescription;
  let authorOfTheDay;
  if (language === 'RU') {
    appDescription = <AppDescriptionRU />;
    authorOfTheDay = <AuthorOfTheDayRU />;
  } else if (language === 'EN') {
    appDescription = <AppDescriptionEN />;
    authorOfTheDay = <AuthorOfTheDayEN />;
  } else if (language === 'BE') {
    appDescription = <AppDescriptionBE />;
    authorOfTheDay = <AuthorOfTheDayBE />;
  }
  return (
    <main>
      {appDescription}
      {authorOfTheDay}
    </main>
  )

}

export default MainPage;