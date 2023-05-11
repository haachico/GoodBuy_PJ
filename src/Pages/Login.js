import { useLoaderData } from "react-router-dom";

///Note - we could have simply used useSearchParams' searchParams state with its get key but to keep up with the theme of Loaders, we are doing it this way.
export const loader = ({ request }) => {
  return new URL(request.url).searchParams.get("message");
};
const Login = () => {
  const message = useLoaderData();

  return (
    <div className="login--form">
      <h1 style={{ marginBottom: "2rem" }}>Sign in to your account.</h1>
      {message && (
        <h4 style={{ color: "red", marginBottom: "1rem", marginTop: "1rem" }}>
          {message}
        </h4>
      )}
      <form>
        <label htmlFor="email">Email : </label>
        <input type="text" id="email" />
        <label htmlFor="password">Password : </label>
        <input type="text" id="password" />
        <button>Login</button>
      </form>
      <a href="#">Forgot password?</a>
    </div>
  );
};

export default Login;
