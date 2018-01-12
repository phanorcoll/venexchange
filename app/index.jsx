import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Styles from './scss/main.scss';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index.jsx';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        < App />
    </Provider>
    , document.getElementById('app'));