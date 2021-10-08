import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Nav from './component/Nav';
import {Provider} from 'react-redux'
import store from './store/store'


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <Nav />
                <App />
           </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('app-root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
