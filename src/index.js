import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss';
import App from './views/App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './stores/reducers/rootReducer'

const reduxStore = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={reduxStore}>
      <App/>
    </Provider> */}
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
