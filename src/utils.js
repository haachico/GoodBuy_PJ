import { redirect } from "react-router";

//added async because sometiems what may happen is before redirecting to login or to navihate to any route we want to go to, a check will be sent to database to check if user is loggedIn, so not directly navigate to the route or redirect to loggin, it will work asyncronously, check we have used Await in App.js in loaders whiile calling this function
const requiredAuth = async () => {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return redirect("/login?message=You must login in first!");
  }
};

export default requiredAuth;
