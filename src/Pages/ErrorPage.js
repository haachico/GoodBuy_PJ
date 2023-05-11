import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ margin: "3rem" }}>Page not found! :(</h2>
      <Link to="/" className="error-btn">
        Back to home page
      </Link>
    </div>
  );
};

export default ErrorPage;
