import React, { useEffect, useState } from "react";

import { ReviewsData } from "../ReviewsData";
import Review from "./Review";

const Reviews = () => {
  const [reviewsData, setReviewsData] = useState([]);

  const getData = async () => {
    const response = await ReviewsData;
    setReviewsData(response);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="reviews--page">
      {reviewsData.map((data) => (
        <Review
          key={data.id}
          name={data.reader}
          rating={data.rating}
          review={data.review}
        />
      ))}
    </div>
  );
};

export default Reviews;
