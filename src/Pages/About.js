import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="about--container">
      <h1>About us</h1>
      <p>
        We are a small team of bibliophiles, dedicated to bring joy into your
        hands!{" "}
      </p>
      <Link to="/books">Explore books here</Link>
    </div>
  );
};

export default About;
