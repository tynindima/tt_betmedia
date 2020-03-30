import React, { ChangeEvent, FC, useState } from 'react';
import './styles/header.scss';
import { Link } from 'react-router-dom';
import { cards } from './api/cards';
import { notifications } from './api/notification';
import macbook from './img/macbook.svg';

export const Header: FC = () => {
  const [text, setText] = useState('');

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setText('');
  };

  return (
    <>
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
      <section className="description">
        <div className="container">
          <h2 className="description__title">
            Why
            {' '}
            <b>
              small business owners
              <br />
              love
            </b>
            {' '}
            AppCo?
          </h2>
          <p className="description__text">
            Our design projects are fresh and simple and
            will benefit your business greatly. Learn more about our work!
          </p>
          <div className="description__cards">
            {cards.map(card => (
              <div key={card.id} className="card">
                <img className="card__img" src={card.img} alt={card.alt} />
                <h3 className="card__title">{card.title}</h3>
                <p className="card__text">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="managing">
        <img className="managing__macbook" src={macbook} alt="qwer" />
        <div className="managing__wrapper">
          <div className="container">
            <h2 className="managing__title">Start Managing your apps business, more faster</h2>
            <p className="managing__text">
              Objectively deliver professional value with diverse web-readiness.
              Collaboratively transition wireless customer service without
              goal&#8209;oriented catalysts for change. Collaboratively.
            </p>
            <a className="managing__button" href="/">Learn more</a>
          </div>
        </div>
      </section>
      <section className="price">
        <div className="container">
          <h2 className="price__title">
            <b>Afforadble Pricing and Packages</b>
            {' '}
            choose your best one
          </h2>
          <p className="price__text">
            Monotonectally grow strategic process improvements vis-a-vis integrated resources.
          </p>
          <div className="price__notifications">
            {notifications.map(note => {
              let classCost = 'notification__cost';

              if (note.id === 2) {
                classCost = 'notification__cost notification__cost--active';
              }

              return (
                <div key={note.id} className="notification">
                  <h3 className="notification__title">{note.title}</h3>
                  <img
                    className="notification__img"
                    src={note.img}
                    alt={note.alt}
                  />
                  <p className={classCost}>{note.cost}</p>
                  <ul className="notification__services">
                    <li>Push Notifications</li>
                    <li>Data Transfer</li>
                    <li>SQL Database</li>
                    <li>Search & SEO Analytics</li>
                    <li>24/7 Phone Support</li>
                    <li>2 months technical support</li>
                    <li>2+ profitable keyword</li>
                  </ul>
                  <a href="." className="notification__button">Purchase now</a>
                </div>
              );
            })}
          </div>
          <p className="price__contact">
            If you need custom services or Need more?
            {' '}
            <a className="price__link" href="/">Contact us</a>
          </p>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <form onSubmit={handleSubmit} className="footer__form form" action="">
            <input onChange={handleInput} value={text} className="form__input" type="text" placeholder="Enter your email" />
            <button
              className="form__button"
              type="submit"
            >
              Subscribe
            </button>
          </form>
          <div className="footer__block">
            <h3 className="footer__title">AppCo</h3>
            <p className="footer__text">All rights reserved by ThemeTags</p>
            <p className="footer__text">Copyrights © 2019.</p>
          </div>
        </div>
      </footer>
    </>
  );
};
