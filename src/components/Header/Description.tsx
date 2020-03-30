import React, { FC } from 'react';
import { cards } from './api/cards';

export const Description: FC = () => (
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
);
