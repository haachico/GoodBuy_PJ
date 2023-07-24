import React from "react";
import { useOutletContext } from "react-router-dom";

function EpubBookInfo() {
  const { displayedEpub } = useOutletContext();
  return (
    <div className="epub--info">
      <h4 className="bookDetails--title">
        Title : {displayedEpub?.volumeInfo?.title}
      </h4>
      <p>
        <strong>Published on : </strong>
        {displayedEpub?.volumeInfo?.publishedDate}
      </p>
      <p>
        {" "}
        <strong>About : </strong> {displayedEpub?.volumeInfo?.description}
      </p>
    </div>
  );
}

export default EpubBookInfo;
