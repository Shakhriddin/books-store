import React, {useLayoutEffect} from 'react';
import BookList from '../BookList';
import {fetchBooks} from '../../actions';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../Loader';
import ErrorIndicator from '../ErrorIndicator';

const HomePage = () => {
  const dispatch = useDispatch();
  const {books, isLoading, error} = useSelector(state => state.books);
  
  useLayoutEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div className="home-page container">
      {
        isLoading
          ? <Loader/>
          : error
            ? <ErrorIndicator/>
            : <BookList books={books}/>
      }
    </div>
  );
};

export default HomePage;
