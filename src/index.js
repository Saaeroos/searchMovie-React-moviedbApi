import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routing from './containers/Routing'
import { BrowserRouter } from 'react-router-dom'

import reducer from './store/reducer'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(reducer)


ReactDOM.render(<Provider store={store}><BrowserRouter><Routing /></BrowserRouter></Provider>, document.getElementById('root'));