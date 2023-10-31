import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'

const rootDiv = document.getElementById('root')
const root = createRoot(rootDiv)

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
)
