import React from 'react';
import './custom.scss';
import github from './db.js';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const githubQuery = {
      query: `
      {
        viewer { 
          login
        }
      }      
      `
    };

    fetch(github.baseURL, {
      method: 'POST',
      headers: github.headers,
      body: JSON.stringify(githubQuery)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.data.viewer.login);
      })
      .catch(err => {
        console.log(err);
      });
  });

  return (
    <div className="App container mt-5">
      <h1 className="text-primary">
        <i className="bi bi-diagram-2-fill" />
        My Repo
      </h1>
    </div>
  );
}
