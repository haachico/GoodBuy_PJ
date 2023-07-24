import React from "react";
import { useContext } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";

import { booksContext } from "../useContext/booksContext";

function EpubBookDetails() {
  const { data } = useContext(booksContext);
  const { id } = useParams();

  const displayedEpub = data
    .filter((e) => e.saleInfo.isEbook === true)
    .find((e) => e.id == id);

  console.log(displayedEpub, "DISPLATED EPUB");

  return (
    <div>
      <div className="epubbook--details--profile">
        <img
          src={
            displayedEpub?.volumeInfo?.imageLinks &&
            displayedEpub?.volumeInfo?.imageLinks.smallThumbnail
          }
          alt={displayedEpub?.volumeInfo.title}
        />
        <div>
          <h3>{displayedEpub?.volumeInfo.title}</h3>
          <h4>
            Rs{" "}
            {Math.round(
              displayedEpub?.saleInfo.listPrice &&
                displayedEpub?.saleInfo.listPrice.amount
            )}
          </h4>
        </div>
      </div>
      <div className="epubbook--details">
        <nav className="hostLayout--nav">
          <NavLink to=".">Info</NavLink>
          <NavLink to="pricing">Pricing</NavLink>
          <NavLink to="photos">Photos</NavLink>
        </nav>
        <Outlet context={{ displayedEpub }} />
      </div>
    </div>
  );
}

export default EpubBookDetails;
