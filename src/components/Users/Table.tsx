import React, { FC, useState } from 'react';
import users from '../../api/users.json';
import usersStatistic from '../../api/usersStatistic.json';

export const Table: FC = () => {
  const [first, setFirst] = useState(1);
  const [last, setLast] = useState(50);

  const usersWithStatistics = users.map(user => {
    const clicks = usersStatistic.reduce((acc, stat) => {
      if (stat.user_id === user.id) {
        return Number(acc) + Number(stat.clicks);
      }

      return acc;
    }, 0);

    const views = usersStatistic.reduce((acc, stat) => {
      if (stat.user_id === user.id) {
        return Number(acc) + Number(stat.page_views);
      }

      return acc;
    }, 0);

    return {
      ...user,
      clicks,
      views,
    };
  });
  const userVisible = usersWithStatistics.filter(user => user.id >= first && user.id <= last);

  const handlePrev = () => {
    if (first > 50) {
      setFirst(first - 50);
      setLast(last - 50);
    }
  };

  const handleNext = () => {
    if (last < usersWithStatistics.length - 50) {
      setFirst(first + 50);
      setLast(last + 50);
    }
  };

  return (
    <>
      <table className="table">
        <thead className="table__header">
          <tr className="table__header-row">
            <th className="table__head table__head--id">Id</th>
            <th className="table__head">First name</th>
            <th className="table__head">Last name</th>
            <th className="table__head">Email</th>
            <th className="table__head">Gender</th>
            <th className="table__head">Ip address</th>
            <th className="table__head">Total clicks</th>
            <th className="table__head">Total page views</th>
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
              <td className="table__cell">{user.clicks}</td>
              <td className="table__cell">{user.views}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="users__block">
        <button className="users__button" type="button" onClick={handlePrev}>prev</button>
        <button className="users__button" type="button" onClick={handleNext}>next</button>
      </div>
    </>
  );
};
