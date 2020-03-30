import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export const Header: FC = () => (
  <header className="header">
    <div className="container">
      <h2 className="header__emblem">AppCo</h2>
      <div className="heading">
        <h1 className="heading__title">
          <b>Brainstorming</b>
          {' '}
          for desired perfect Usability
        </h1>
        <p className="heading__text">
          Our design projects are fresh and simple and will benefit your business greatly.
          Learn more about our work!
        </p>
        <Link
          className="heading__button"
          to="/users"
        >
          View Stats
        </Link>
      </div>
      <div className="phone">
        <div className="phone__frame">
          <div className="phone__display" />
          {/* <img className="phone__display" src={logo} alt="phone" /> */}
        </div>
      </div>
    </div>
  </header>
);
