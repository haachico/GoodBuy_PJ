import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Book from "./Book";
import { booksContext } from "../useContext/booksContext";
const EpubBooks = () => {
  const { data } = useContext(booksContext);

  console.log(data, "DATAA");

  const epubBooks = data.filter((e) => e.saleInfo.isEbook === true);

  console.log(epubBooks, "EPUB BOOOOKS");
  return (
    <div className="books--component">
      {epubBooks.map((e) => (
        <div>
          <Link to={`epubBooks/${e.id}`}>
            <Book
              img={
                e.volumeInfo?.imageLinks &&
                e.volumeInfo?.imageLinks.smallThumbnail
              }
              title={e.volumeInfo.title}
              price={e.saleInfo.listPrice && e.saleInfo.listPrice.amount}
              key={e.id}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default EpubBooks;
