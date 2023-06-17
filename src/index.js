import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import BooksProvider from './context/books-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <BooksProvider>
        <App />
      </BooksProvider>
    </Router>
  </React.StrictMode>
);

