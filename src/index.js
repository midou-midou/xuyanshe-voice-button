import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App.jsx';
import FloatNavLink from './component/Navs/FloatNavLink';
import {Provider} from 'react-redux'
import store from './store/store'

const container = document.getElementById('app-root');
const root = createRoot(container);
root.render(
    <StrictMode>
        <Provider store={store}>
            <App />
            <FloatNavLink />
        </Provider>
    </StrictMode>
)
