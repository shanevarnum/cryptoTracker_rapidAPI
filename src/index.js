// starting point of app - index.js - import React and React DOM etc.
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
// import app component
import App from './App'
import store from './app/store'
import 'antd/dist/antd.min.css'

// passes App as component and also hooks app on to root div using getElement
ReactDOM.render(
    <Router>
        <Provider store={store}>
        <App />
        </Provider>
    </Router>, 
    document.getElementById('root'))