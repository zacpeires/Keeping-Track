import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import App from './store'
import store from './store'


ReactDOM.render(
  <Provider store={store}>
   <Router>
     <App />
   </Router>
  </Provider>
  ,
  document.getElementById('app')
)
