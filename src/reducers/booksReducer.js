import {
  BOOK_ADDED_TO_CART,
  BOOK_DELETED_FROM_CART,
  BOOK_REMOVED_FROM_CART,
  BOOK_SET_ERROR,
  BOOK_SET_LOADING,
  BOOKS_LOADED
} from '../types';

const initState = {
  books: [],
  cartItems: [],
  orderTotal: 0,
  totalItems: 0,
  isLoading: false,
  error: '',
};

const updateCartItem = (state, payload, quantity) => {
  const bookId = payload;
  const {id, title, price} = state.books.find(book => book.id === bookId);
  const itemIndex = state.cartItems.findIndex(({id}) => id === bookId);

  const cartItems = itemIndex < 0
    ?
    [
      ...state.cartItems,
      {
        id,
        title,
        count: 1,
        total: price,
      },
    ]
    :
    [
      ...state.cartItems
        .map(cartItem => {
          if (id === cartItem.id) {
            return {
              ...cartItem,
              count: cartItem.count + quantity,
              total: cartItem.total + price * quantity
            };
          }
          return cartItem;
        })
        .filter(cartItem => cartItem.count !== 0)
    ];

  return {
    ...state,
    cartItems,
    orderTotal: state.orderTotal + price * quantity,
    totalItems: state.totalItems + quantity,
  };
};

const booksReducer = (state = initState, {type, payload}) => {
  switch (type) {
    case BOOKS_LOADED:
      return {
        ...state, books: payload
      };

    case BOOK_ADDED_TO_CART:
      return updateCartItem(state, payload, 1);

    case BOOK_DELETED_FROM_CART:
      const cartItem = state.cartItems.find(({id}) => id === payload);
      return updateCartItem(state, payload, -cartItem.count);

    case BOOK_REMOVED_FROM_CART:
      return updateCartItem(state, payload, -1);
    case BOOK_SET_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case BOOK_SET_ERROR:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
};

export default booksReducer;