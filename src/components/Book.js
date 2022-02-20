import React, { useEffect } from "react";

import "./Knopf.css";

const Book = ({ recommendedBooks, indexBegin, indexEnd }) => {
  console.log(recommendedBooks);

  const buttonsMarkup = recommendedBooks
    .slice(indexBegin, indexEnd)
    .map((book) => (
      <details key={book.id}>
        <summary>{book.title}</summary>
        <p>{book.author}</p>
        <p>{book.publishedDate}</p>
        <p>{book.genre}</p>
      </details>
    ));

  return <div>{buttonsMarkup}</div>;
};

export default Book;
