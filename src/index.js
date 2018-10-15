import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feedback = (state = {}, action) => {
    switch (action.type) {
        case 'RESET':
            return {};
        case 'SET_ANSWER':
            return {...state, ...action.payload};
        default:
            return state;
    }
}

const store = createStore(
    feedback,
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
