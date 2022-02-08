import React from 'react';
import {Navigate} from 'react-router-dom';
import HomePage from '../components/Pages/HomePage';
import CartPage from '../components/Pages/CartPage';

export const routes = [
  {
    path: '/',
    element: <HomePage/>,
    exact: true,
  },
  {
    path: '/cart',
    element: <CartPage/>,
    exact: true,
  },
  {
    path: '*',
    element: (<Navigate to="/"/>),
    exact: true,
  },
];