import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WholeApp from './containers/WholeApp'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(<BrowserRouter><WholeApp /></BrowserRouter>, document.getElementById('root'));