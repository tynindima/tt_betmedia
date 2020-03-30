import React, { FC } from 'react';
import macbook from './img/macbook.svg';

export const Managing: FC = () => (
  <section className="managing">
    <img className="managing__macbook" src={macbook} alt="macbook" />
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
);
