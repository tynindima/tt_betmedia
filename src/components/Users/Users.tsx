import React from 'react';
import './styles/users.scss';
import users1 from '../../api/users1.json';

export const Users = () => {
  const userVisible = users1.filter(user => user.id >= 1 && user.id <= 50);

  return (
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
          <table className="table">
            <thead className="table__header">
              <tr className="table__header-row">
                <th className="table__head table__head--id">Id</th>
                <th className="table__head">First name</th>
                <th className="table__head">Last name</th>
                <th className="table__head">Email</th>
                <th className="table__head">Gender</th>
                <th className="table__head">Ip address</th>
              </tr>
            </thead>
            <tbody>
              {userVisible.map((user: User) => (
                <tr key={user.id}>
                  <td className="table__cell table__cell--num">{user.id}</td>
                  <td className="table__cell">{user.first_name}</td>
                  <td className="table__cell">{user.last_name}</td>
                  <td className="table__cell">{user.email}</td>
                  <td className="table__cell">{user.gender}</td>
                  <td className="table__cell">{user.ip_address}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
};
