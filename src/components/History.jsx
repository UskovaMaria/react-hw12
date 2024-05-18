import React from 'react';
import { Link } from 'react-router-dom';

export const History = ({ history }) => {
  return (
    <div className="history">
      <h3>Історія переходів</h3>
      <ul>
        {history.map((location, index) => (
          <li key={index}>
            <Link to={location.pathname}>{location.pathname}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};