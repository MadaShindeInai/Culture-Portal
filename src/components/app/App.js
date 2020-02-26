import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from '../footer';
import Header from '../header';
import StyleGuide from '../styleGuide';
import PersonPage from '../personPage';
import DevelopersPage from '../developersPage';
import MainPage from '../mainPage';
import AuthorsListPage from '../authorsListPage';
import './normalize.scss';
import './fonts.scss';
import './App.scss';



function App() {
  const [language, setLanguage] = useState('RU');

  return (
    <div className="wrapper">
      <Router>
        <Header language={language} setLanguage={setLanguage} />
        <main className="main">
          <Route path='/' render={() => <MainPage language={language} />} exact />
          <Route path='/authors' render={() => <AuthorsListPage language={language} />} exact />
          <Route path='/authors/:id' render={() => <PersonPage language={language} />} exact />
          <Route path='/styleguide' render={() => <StyleGuide language={language} />} exact />
          <Route path='/developers' render={() => <DevelopersPage language={language} />} exact />
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
