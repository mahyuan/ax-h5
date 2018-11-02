import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
require('./assets/reset.css');
require('./middleware/setREM');

ReactDOM.render(<App />, document.getElementById('root'));
