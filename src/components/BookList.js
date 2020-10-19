import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const BookList = () => {
  const { removeBook } = useContext(BookContext);
  const { books } = useContext(BookContext);
  return (
    <div className="book-list">
      {books.length ? (
        <ul>
          {books.map((book) => (
            <li key={book.id} onClick={() => removeBook(book.id)}>
              <div className="title">{book.title}</div>
              <div className="author">{book.author}</div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty">No book! Let's add one</div>
      )}
    </div>
  );
};

export default BookList;
