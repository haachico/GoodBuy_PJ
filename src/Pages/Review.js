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

// 1. How did we change our route definitions in order to
//    "protect" certain routes from an un-logged-in user?

// Wrapped the routes we wanted to protect in a Layout route
// that contains logic to redirect someone if they're not logged
// in

// 2. What component can we use to automatically send someone
//    to a different route in our app?

// <Navigate to="/login" />

// 3. What component can we render if the user IS logged in?

// <Outlet />
