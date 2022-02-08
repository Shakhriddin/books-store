import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {routes} from '../../router';

const AppRouter = () => {
  return (
    <Routes>
      {routes.map(({path, element, exact}) => {
        return (
          <Route
            key={path}
            path={path}
            element={element}
            exact={exact}
          />);
      })}
    </Routes>
  );
};

export default AppRouter;
