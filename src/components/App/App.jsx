import React from 'react';
import AppRouter from './AppRouter';
import Header from '../Header';
import {useSelector} from 'react-redux';
import './App.scss';

const App = () => {
  const {totalItems, orderTotal} = useSelector(state => state.books);

  return (
    <div className="app">
      <Header
        items={totalItems}
        total={orderTotal}
      />
      <AppRouter/>
    </div>
  );
};

export default App;
