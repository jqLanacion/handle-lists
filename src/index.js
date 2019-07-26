import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import apiEllipsis from './services/apiEllipsis';

apiEllipsis.init();

ReactDOM.render(<App />, document.getElementById('root'));
