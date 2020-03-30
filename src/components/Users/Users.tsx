import React from 'react';
import './styles/users.scss';
import { Table } from './Table';

export const Users = () => (
  <>
    <main className="users">
      <div className="users__head">
        <h2 className="users__emblem">AppCo</h2>
      </div>
      <div className="container">
        <p className="users__links">
          <a className="users__link users__link--main" href="/">Main page</a>
          <a className="users__link users__link--users" href=".">User statistics</a>
        </p>
        <h2 className="users_title">User statistics</h2>
        <Table />
      </div>
    </main>
    <footer className="users_footer">
      <div className="container users_footer__block">
        <h3 className="users_footer__title">AppCo</h3>
        <p className="users_footer__text">All rights reserved by ThemeTags</p>
        <p className="users_footer__text">Copyrights © 2019.</p>
      </div>
    </footer>
  </>
);
