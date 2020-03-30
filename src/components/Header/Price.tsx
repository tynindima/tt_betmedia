import React, { FC } from 'react';
import { notifications } from './api/notification';

export const Price: FC = () => (
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
);
