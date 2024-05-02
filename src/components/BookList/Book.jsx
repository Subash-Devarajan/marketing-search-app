import React from 'react';
import { Link } from 'react-router-dom';
import "./BookList.css";

const Book = (book) => {
  return (
    <div className='book-item flex flex-column flex-sb'>
      <div className='book-item-info text-center'>
        <Link to = {`/book/${book.id}`} {...book}>
          <div className='book-item-info-item title fw-7 fs-18'>
            <span>{book.title + " (" + (book.id + 1) + ")"}</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Book