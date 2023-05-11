const Review = ({ id, name, rating, review }) => {
  return (
    <div className="review--card">
      <h4 style={{ marginBottom: "1rem" }}>Rating : {rating}</h4>
      <q>{review}</q>
      <div style={{ display: "flex", marginTop: "1rem" }}>
        <p>--</p>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Review;
