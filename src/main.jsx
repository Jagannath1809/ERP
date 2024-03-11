import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Products from './components/Products.jsx'
import Orders from './components/Orders.jsx'
import './index.css'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path='/' Component={App}/>
      <Route path='/Products' Component={Products}/>
      <Route path='/Orders' Component={Orders}/>
    </Routes>
  </Router>
)
