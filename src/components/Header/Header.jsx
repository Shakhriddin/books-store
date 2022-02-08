import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';

const Header = ({items, total}) => {
  return (
    <header className="header container">
      <Link
        to="/"
        className="header__logo"
      >
        <span>Books</span>
        <small>for</small>
        <span>Coders</span>
      </Link>
      <Link to="/cart"
            className="header__info">
        <svg className="header__icon"
             role="img"
             viewBox="0 0 576 512">
          <g>
            <path
              fill="#3CB371C0"
              d="M552 64H159.21l52.36 256h293.15a24 24 0 0 0 23.4-18.68l47.27-208a24 24 0 0 0-18.08-28.72A23.69 23.69 0 0 0 552 64z"
            >
            </path>
            <path
              fill="#3CB371FF"
              d="M218.12 352h268.42a24 24 0 0 1 23.4 29.32l-5.52 24.28a56 56 0 1 1-63.6 10.4H231.18a56 56 0 1 1-67.05-8.57L93.88 64H24A24 24 0 0 1 0 40V24A24 24 0 0 1 24 0h102.53A24 24 0 0 1 150 19.19z"
            >
            </path>
          </g>
        </svg>
        <span>
          {items} <small>items (</small> {total}<small><sup>$</sup> )</small>
        </span>
      </Link>
    </header>
  );
};

export default Header;
