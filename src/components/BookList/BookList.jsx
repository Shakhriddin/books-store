import React, {useCallback} from 'react';
import './BookList.scss';
import {useDispatch} from 'react-redux';
import {bookAddedToCart} from '../../actions';
import BookListItem from '../BookListItem';

const BookList = ({books}) => {
  const dispatch = useDispatch();

  const onAddedToCart = useCallback(id => dispatch(bookAddedToCart(id)), [dispatch]);

  return (
    <ul className="book-list">
      {
        books.map(book => (
          <BookListItem
            key={book.id}
            book={book}
            onAddedToCart={onAddedToCart}
          />
        ))
      }
    </ul>
  );
};

export default BookList;
