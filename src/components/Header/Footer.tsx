import React, {
  ChangeEvent,
  FormEvent,
  FC,
  useState,
} from 'react';

export const Footer: FC = () => {
  const [text, setText] = useState('');

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setText('');
  };

  return (
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
  );
};
