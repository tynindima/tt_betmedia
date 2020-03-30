import React, { FC } from 'react';
import users1 from '../../api/users1.json';

export const Table: FC = () => {
  const userVisible = users1.filter(user => user.id >= 1 && user.id <= 50);

  return (
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
  );
};
