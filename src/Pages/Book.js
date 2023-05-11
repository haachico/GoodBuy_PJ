const Book = ({ img, title, price }) => {
  return (
    <div className="book--component">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h4> Title: {title}</h4>
        <p>
          <strong>Price</strong> : INR {Math.trunc(price)}
        </p>
      </div>
    </div>
  );
};

export default Book;
