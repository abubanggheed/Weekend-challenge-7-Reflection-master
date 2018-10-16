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
            return {...state, ...action.payload /* an object with one property */ };
        default:
            return state;
    }
}
// complete feedback state:
//state = {
//     feeling: 3,
//     understanding: 3,
//      support: 3,
//      comments: 'some string',
// }

const store = createStore(
    feedback,
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
