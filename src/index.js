import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './StarRating.js';
import StarRating from './StarRating.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={['Terrible', 'Bad', 'Okay', 'Good', 'Great']}
      className='test'
      defaultRating={3}
      color='orange'
      size={38}
    />
    <StarRating
      maxRating={5}
      color='red'
      size={24}
      className='test'
      defaultRating={5}
    /> */}
  </React.StrictMode>
);
