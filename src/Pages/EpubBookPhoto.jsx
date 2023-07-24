import React from "react";
import { useOutletContext } from "react-router-dom";

function EpubBookPhoto() {
  const { displayedEpub } = useOutletContext();
  return (
    <div>
      <img
        src={
          displayedEpub?.volumeInfo?.imageLinks &&
          displayedEpub?.volumeInfo?.imageLinks.smallThumbnail
        }
        alt={displayedEpub?.volumeInfo.title}
        style={{ width: "25rem", height: "15rem" }}
      />
    </div>
  );
}

export default EpubBookPhoto;
