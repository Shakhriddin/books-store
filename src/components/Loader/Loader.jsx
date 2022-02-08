import React from 'react';
import classes from './Loader.module.scss';

const Loader = () => {
  const loaderItems = new Array(8)
    .fill('')
    .map((_, index) => (
        <div
          key={index}
          className={classes.loader__item}
        >
        </div>
      )
    );

  return (
    <div className={classes.loader}>
      <div className={classes.loader__wrapper}>
        {loaderItems}
      </div>
    </div>
  );
};

export default Loader;
