import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Lily's reading list</h1>
      <p>You have {books.length} book to get through</p>
    </div>
  );
};

export default Navbar;
