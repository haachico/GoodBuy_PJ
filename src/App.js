import "./styles.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import Books, { loader as booksLoader } from "./Pages/Books";
import BookDetails, { loader as detailsLoader } from "./Pages/BookDetails";
import Layout from "./Components/Layout";
import Dashboard from "./Pages/Dashboard";
import Reviews from "./Pages/Reviews";
import EpubBooks from "./Pages/EpubBooks";
import HostLayout from "./Components/HostLayout";
import ErrorPage from "./Pages/ErrorPage";
import EpubBookDetails from "./Pages/EpubBookDetails";
import EpubBookInfo from "./Pages/EpubBookInfo";
import EpubBookPricing from "./Pages/EpubBookPricing";
import EpubBookPhoto from "./Pages/EpubBookPhoto";

import Login, { loader as loginLoader } from "./Pages/Login";
import requiredAuth from "./utils";

const router = createBrowserRouter(
  createRoutesFromElements(
    //  {/* This below Route that wraps is acting as a parent element of children Routes. That means when we import Outlet in Layout Component, that Outlet covers/accompanies all these pages
    //         Layout element is the one where all of the shared User Iterfaces (in our case just the simple nevigation in Host) are gonna be exposed, and everything nested inside the Layout element Route (see below) will come in Outlet (see the layout component or HostLayout component for reference).

    //         Layout -
    //         LayOut is the actual route that hosts or contains the shared User Interfaces of the nested routes. Its job is not to display the primary content from the nested routes. Its primary job is to display just the shared portion that you don't want changing when you go from one nested route to another nested route.

    //         */}

    //         {/*
    //         Outlet - We use Outlet anytime we have a parent Route that's wrapping children routes. Outlet is the placeholder that represents the place in your parent route where the matching child routes will render its content.
    //         */}

    //         {/* index route -  Index route is a child route that will match the route of the parent route if the parent rout has a path defined.
    // If I have an element that I want to display in the Outlet of the Layout component but I want it to be at the same route as what the layout component is defined at then we can simply write the prop called 'index'. For eg, when we write "/" in browser, we want first layout component to render and inside the layout, stick the Home element. And when it changes to "/about", we dont want to render Home anymore because it is not index anymore, it is "/about", so it should render About element inside the outlet of the parent.
    // */}

    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="books" element={<Books />} loader={booksLoader} />
      <Route
        path="books/:id"
        element={<BookDetails />}
        loader={detailsLoader}
      />
      <Route path="login" element={<Login />} loader={loginLoader} />
      {/* :id is basically a placeholder for whaatever we are gonna put in the path after /book --this is mostly used for one detail component. Why? Suppose there are 1000 cards comong from the api call,we cant go on creating/writing seperate route, seperate Link, spearte component for each detail component of card.
The best and convinient practice is to pass unique IDs in Route path in place of placeholder (in Link ofc) and to make use of useParams to access those passed ids to find the matching id of card in API called cards and display pnly the detail of that matched card.
for ref, also check how useParams was in BookDettails component.
*/}
      <Route path="cart" element={<Cart />} />

      <Route path="/host" element={<HostLayout />}>
        {/* <Route
          index
          element={<Dashboard />}
          // loader={async () => {
          //   return await requiredAuth();
          // }}
        /> */}
        <Route
          // path="epubBooks"
          index
          element={<EpubBooks />}
          // loader={async () => {
          //   return await requiredAuth();
          // }}
        />
        <Route path="epubBooks/:id" element={<EpubBookDetails />}>
          <Route index element={<EpubBookInfo />} />
          <Route path="pricing" element={<EpubBookPricing />} />
          <Route path="photos" element={<EpubBookPhoto />} />
        </Route>
        <Route
          path="review"
          element={<Reviews />}
          // loader={async () => {
          //   return await requiredAuth();
          // }}
        />

        {/*  '/' should be treated as the initial page. If we start path name with '/', react router is gonna treat it as an Absolute path, but if we remove '/' and give/write only the path name, the reacr will treat it as a relative path---relative to its parent.
  Note -- 
   */}
      </Route>

      {/* also called as catch all route, where all routes not mentioned above are catched */}
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
