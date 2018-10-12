import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feedback = (store = {}, action) => {
    switch (action.type) {
        case 'FEELING':
            return { ...store, feeling: action.payload };
        case 'UNDERSTANDING':
            return { ...store, understanding: action.payload };
        case 'SUPPORTED':
            return { ...store, supported: action.payload };
        case 'COMMENTS':
            return { ...store, comments: action.payload };
        default:
            return store;
    }
}

const store = createStore(
    feedback,
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
