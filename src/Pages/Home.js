import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home--container">
      <h1>
        You like reading? <br />
        We sell what you love!
      </h1>
      <p style={{ marginTop: "2rem" }}>Welcome!</p>

      <Link to="books">Explore books here</Link>
    </div>
  );
};

export default Home;
