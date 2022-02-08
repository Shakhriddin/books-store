import React from 'react';
import './OrderTable.scss';
import {useDispatch, useSelector} from 'react-redux';
import {
  bookAddedToCart,
  bookDeletedFromCart,
  bookRemovedFromCart
} from '../../actions';

const OrderTable = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.books.cartItems);
  const orderTotal = useSelector(state => state.books.orderTotal);

  const renderTableRow = (cartItem, idx) => {
    const {id, title, count, total} = cartItem;

    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>{total}<sup>$</sup></td>
        <td>
          <button
            className="table__btn"
            onClick={() => dispatch(bookAddedToCart(id))}
          >
            <svg className="table__icon"
                 role="img"
                 viewBox="0 0 512 512">
              <g>
                <path
                  fill="#00D35E4D"
                  d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276a12 12 0 0 1-12 12h-92v92a12 12 0 0 1-12 12h-56a12 12 0 0 1-12-12v-92h-92a12 12 0 0 1-12-12v-56a12 12 0 0 1 12-12h92v-92a12 12 0 0 1 12-12h56a12 12 0 0 1 12 12v92h92a12 12 0 0 1 12 12z"
                >
                </path>
                <path
                  fill="#00D35EFF"
                  d="M400 284a12 12 0 0 1-12 12h-92v92a12 12 0 0 1-12 12h-56a12 12 0 0 1-12-12v-92h-92a12 12 0 0 1-12-12v-56a12 12 0 0 1 12-12h92v-92a12 12 0 0 1 12-12h56a12 12 0 0 1 12 12v92h92a12 12 0 0 1 12 12z"
                >
                </path>
              </g>
            </svg>
          </button>
          <button
            className="table__btn"
            onClick={() => dispatch(bookRemovedFromCart(id))}
          >
            <svg className="table__icon"
                 role="img"
                 viewBox="0 0 512 512">
              <g>
                <path
                  fill="#FFAF274A"
                  d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276a12 12 0 0 1-12 12H124a12 12 0 0 1-12-12v-56a12 12 0 0 1 12-12h264a12 12 0 0 1 12 12z"
                >
                </path>
                <path
                  fill="#ffaf27"
                  d="M400 284a12 12 0 0 1-12 12H124a12 12 0 0 1-12-12v-56a12 12 0 0 1 12-12h264a12 12 0 0 1 12 12z"
                >
                </path>
              </g>
            </svg>
          </button>
          <button
            className="table__btn"
            onClick={() => dispatch(bookDeletedFromCart(id))}
          >
            <svg className="table__icon"
                 role="img"
                 viewBox="0 0 448 512">
              <g>
                <path
                  fill="#FF000066"
                  d="M53.2 467L32 96h384l-21.2 371a48 48 0 0 1-47.9 45H101.1a48 48 0 0 1-47.9-45z"
                >
                </path>
                <path
                  fill="#FF0000FF"
                  d="M0 80V48a16 16 0 0 1 16-16h120l9.4-18.7A23.72 23.72 0 0 1 166.8 0h114.3a24 24 0 0 1 21.5 13.3L312 32h120a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H16A16 16 0 0 1 0 80z"
                >
                </path>
              </g>
            </svg>
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="order-table container">
      <h2 className="order-table__title">Your Order</h2>
      <table className="order-table__table table">
        <thead>
        <tr>
          <th>#</th>
          <th>Item</th>
          <th>Count</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
        </thead>

        <tbody>
        {cartItems.map(renderTableRow)}
        </tbody>
      </table>

      <div className="order-table__total">
        <small>Total:</small> {orderTotal}<sup><small>$</small></sup>
      </div>
    </div>
  );
};

export default OrderTable;
