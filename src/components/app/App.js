import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { FooterRU, FooterBE, FooterEN } from '../footer';
import { HeaderEN, HeaderRU, HeaderBE } from '../header';
import { StyleGuideRU, StyleGuideEN, StyleGuideBE } from '../styleGuide';
import { PersonPageBE, PersonPageRU, PersonPageEN } from '../personPage';
import { DevelopersPageBE, DevelopersPageRU, DevelopersPageEN } from '../developersPage';
import MainPage from '../mainPage';
import AuthorsListPage from '../authorsListPage';
import './normalize.scss';
import './fonts.scss';
import './App.scss';



function App() {
  const [language, setLanguage] = useState('RU');
  let header;
  let footer;
  let personPage;
  let styleGuide;
  let developersPage;
  if (language === 'RU') {
    header = <HeaderRU setLanguage={setLanguage} />;
    footer = <FooterRU />;
    personPage = <PersonPageRU />;
    styleGuide = <StyleGuideRU />;
    developersPage = <DevelopersPageRU />;
  } else if (language === 'EN') {
    header = <HeaderEN setLanguage={setLanguage} />;
    footer = <FooterEN />;
    personPage = <PersonPageEN />;
    styleGuide = <StyleGuideEN />;
    developersPage = <DevelopersPageEN />;
  } else if (language === 'BE') {
    header = <HeaderBE setLanguage={setLanguage} />;
    footer = <FooterBE />;
    personPage = <PersonPageBE />;
    styleGuide = <StyleGuideBE />;
    developersPage = <DevelopersPageBE />;
  }

  return (
    <div className="wrapper">
      <Router>
        {header}
        <Route path='/' render={() => <MainPage language={language} />} exact />
        <Route path='/authors' render={() => <AuthorsListPage language={language} />} exact />
        <Route path='/authors/:id' render={() => personPage} exact />
        <Route path='/styleguide' render={() => styleGuide} exact />
        <Route path='/developers' render={() => developersPage} exact />
        {footer}
      </Router>
    </div>
  );
}

export default App;
