import React from 'react';
import MyImage from '../Image/MyImage';
import './BookListItem.scss';

const BookListItem = ({book, onAddedToCart}) => {
  const {id, title, author, price, coverImage} = book;
  return (
    <li className="book-list__book book">
      <MyImage
        className="book__image"
        options={{url: coverImage, alt: 'Book\'s picture'}}
      />
      <div className="book__details">
        <div className="book__details-body">
          <a href="#"
             className="book__title">
            {title}
          </a>
          <span className="book__author">by {author}</span>

          <span className="book__price"><span>Buy new:</span> {price}<sup><small>$</small></sup> </span>
        </div>
        <button
          className="book__btn"
          onClick={() => onAddedToCart(id)}
        >
          Add to cart
        </button>
      </div>
    </li>
  );
};

export default BookListItem;
