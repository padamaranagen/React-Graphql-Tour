import React from 'react';
import './custom.scss';
import github from './db.js';
import githubQuery from './Query.js';
import { useEffect, useState, useCallback } from 'react';

export default function App() {
  let [userName, setUserName] = useState('');

  const fetchData = useCallback(() => {
    fetch(github.baseURL, {
      method: 'POST',
      headers: github.headers,
      body: JSON.stringify(githubQuery)
    })
      .then(response => response.json())
      .then(data => {
        setUserName(data.data.viewer.login);
        console.log(data.data.viewer.login);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="App container mt-5">
      <h1 className="text-primary">
        <i className="bi bi-diagram-2-fill" />
        My Repo
      </h1>
      <p>Hi {userName}</p>
    </div>
  );
}
