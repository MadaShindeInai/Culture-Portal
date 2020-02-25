import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const HeaderEN = ({ setLanguage }) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to='/authors'>Arhitectors</Link>
          </li>
          <li>
            <Link to='/styleguide'>StyleGuide</Link>
          </li>
          <li>
            <Link to='/developers'>Developers</Link>
          </li>
          <li>
            <button
              type="button"
              onClick={() => setLanguage('BE')}
            >BE</button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => setLanguage('RU')}
            >RU</button>
          </li>
        </ul>
      </nav>

    </header>
  )

}

export default HeaderEN;