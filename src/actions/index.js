import {
  BOOK_ADDED_TO_CART,
  BOOK_DELETED_FROM_CART,
  BOOK_REMOVED_FROM_CART,
  BOOK_SET_ERROR,
  BOOK_SET_LOADING,
  BOOKS_LOADED
} from '../types';
import BooksService from '../services/BooksService';

const booksLoaded = newBooks => ({type: BOOKS_LOADED, payload: newBooks});

const bookAddedToCart = bookId => ({type: BOOK_ADDED_TO_CART, payload: bookId});

const bookDeletedFromCart = bookId => ({
  type: BOOK_DELETED_FROM_CART,
  payload: bookId
});

const bookRemovedFromCart = bookId => ({
  type: BOOK_REMOVED_FROM_CART,
  payload: bookId
});
const bookSetLoading = payload => ({type: BOOK_SET_LOADING, payload});

const bookSetError = payload => ({type: BOOK_SET_ERROR, payload});

const fetchBooks = () => async (dispatch) => {
  dispatch(bookSetLoading(true));
  try {
    const booksData = await BooksService.getBooks();
    dispatch(booksLoaded(booksData));
  } catch (e) {
    dispatch(bookSetError('Error while loading books!'));
  }
  dispatch(bookSetLoading(false));
};

export {
  booksLoaded,
  bookAddedToCart,
  bookDeletedFromCart,
  bookRemovedFromCart,
  bookSetLoading,
  bookSetError,
  fetchBooks,
};