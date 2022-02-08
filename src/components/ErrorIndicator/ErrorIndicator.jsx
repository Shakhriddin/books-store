import React from 'react';
import classes from './ErrorIndicator.module.scss';

const ErrorIndicator = () => {
  return (
    <div className={classes.errorIndicator}>
      <span className={classes.errorInfo}>Something went wrong!</span>
      <span className={classes.errorInfo}>Please, try again later.</span>
    </div>
  );
};

export default ErrorIndicator;
