import React, {useRef, useState} from 'react';
import classes from './MyImage.module.scss';
import Loader from '../Loader/Loader';
import {useLazyLoad} from '../../hooks/useLazyLoad';

const MyImage = ({options: {url, alt}, ...attr}) => {
  const [isLoading, setIsLoading] = useState(true);
  const ref = useRef();

  useLazyLoad(ref, isLoading, () => {
    setIsLoading(false);
  });

  return (
    <div {...attr} ref={ref}>
      {isLoading
        ? <Loader/>
        : <img
          className={classes.myImage}
          src={url}
          alt={alt}
        />}
    </div>
  );
};

export default MyImage;
