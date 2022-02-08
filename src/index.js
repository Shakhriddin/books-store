import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './store';
import BooksService from './services/BooksService';
import {BooksServicesContext} from './context';
import './index.scss';
import ErrorBoundary from './components/ErrorBoundary';
import App from './components/App';
//  mkdir OrderTable && cd ./OrderTable && touch OrderTable.jsx OrderTable.scss index.js && cd ../


const booksService = new BooksService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BooksServicesContext.Provider value={booksService}>
        <Router>
          <App/>
        </Router>
      </BooksServicesContext.Provider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);
