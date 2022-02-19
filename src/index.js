import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import FloatNavLink from './component/Navs/FloatNavLink';
import {Provider} from 'react-redux'
import store from './store/store'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
                <FloatNavLink />
           </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('app-root')
);

