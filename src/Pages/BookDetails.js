import { useEffect, useState, useContext } from "react";
import { useParams, Link, useLocation, useLoaderData } from "react-router-dom";

import { booksContext } from "..";

// useParams is an object that basically helps us get the unique ID we pass in the Link.

//Suppose we pass in Route --<Route path="/books/:id" elements ={BookDetails} />

//that :id is basically telling us that anyhing we write after /books/ is gonna return that BookDetails component.

//We wrap a variable (like About nav) or a component around Link giving the prop to LInk as to="/books/anything

//And we use useParams, we basically gets the object --> {id: 'anything'}
//
export const loader = ({ params }) => {
  return fetch(
    "https://www.googleapis.com/books/v1/volumes?q=allgenres=paid-books&key=AIzaSyATSMjI2Zaim9CnEn3GyJHNfFzBVVgRzFg" +
      "&maxResults=40"
  )
    .then((res) => res.json())
    .then((data) => data?.items?.find((e) => e.id === params.id));
};
const BookDetails = () => {
  const { cartItems, setCartItems, data, qty, backupData, setBackupData } =
    useContext(booksContext);

  // we can also destructure here
  // we can also write as
  //const {id} = useParams()
  // as useParam was an Obj -- {id: {e.id}}
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  //here we use useLocation (imported as a hook above from "react-router-dom") to capture the querry parameter of the page from where we came here, so if we console.loglocation here we will get an object(as location is an obj, as useLocation returns an object), and in the obj, there is a key called "state" (that we passed in the Link from where we have come here, check books file for reference).
  //go to the Link commnent below for more explanation.)
  const location = useLocation();
  console.log(location, "Location");

  const bookDetails = useLoaderData();

  //[{}, {}, {}]

  console.log(bookDetails, "BOOK DETAILS");

  const handleAddToCart = (item) => {
    setCartItems(
      data.map((e) => e.id === item.id) &&
        cartItems.filter((e) => e.data === item).length === 0
        ? [...cartItems, { data: item, qty: 1 }]
        : cartItems
    );
    setBackupData(
      data.map((e) => e.id === item.id) &&
        backupData.filter((e) => e.data === item).length === 0
        ? [...backupData, { data: item, qty: 1 }]
        : backupData
    );
  };

  console.log(backupData, "BACKUPDATA");
  console.log(cartItems, "CART ITEMS");

  console.log(id);

  const search = location.state?.search || "";

  //This is for conditioal rendering of back button. We added a type key with typeFilter value in State Obj in Link (in Boooks.js). and based on the type we get (if there is any, if not we use "all"), we will accordingly update the button(check btn below)
  const type = location.state?.type || "all";

  console.log(bookDetails, "bookdetails");
  return (
    <div className="bookDetails--page">
      {/* See we are using the 'to' and 'relative' props here. If you go to to the books page/file and check the Link from where we are coming here, we are only passing the id and there is no slash "/" before it in to to prop there---- meaning it is relative path! Why/how? Because in the App file in Route for details, it was "books/:id" and not "/books/:id" written making it a relative path to "books" path (initialising path with / makes it an absolute path)  */}

      {/* Also, (...cntd from useLocation comment), see we are using .. as it is a relative path, and then we are writing the query parameter of the page we are coming from here, so that when we click back button, we go to that page only, that querry parameter page. For eg, sometimes, when we go to a page of list of produts, and suppose we filter by price (or filter by category like here with query parameter) and than when we go to the detail page of any particular product and then when we want to go back, we will be taken to that FILTERED page   itself if we do it this way---OR ELSE we will be taken to the generalised list page*/}

      {/* Now check Book Link, how we passed State there for to be captured here--and with the help of which to also go there when clicked back button */}
      <Link to={`..${search}`} relative="path" className="back-button">
        &larr; <span>Back to {type} books</span>
      </Link>
      {
        <div className="bookDetails--component">
          <img
            src={bookDetails?.volumeInfo?.imageLinks?.smallThumbnail}
            alt=""
          />
          <h4 className="bookDetails--title">
            Title : {bookDetails?.volumeInfo?.title}
          </h4>
          <p>
            <strong>Published on : </strong>
            {bookDetails?.volumeInfo?.publishedDate}
          </p>
          <p>
            {" "}
            <strong>About : </strong> {bookDetails?.volumeInfo?.description}
          </p>
          {cartItems.filter((e) => e.data.id === bookDetails.id).length ===
          0 ? (
            <button
              className="book--btn"
              onClick={() => handleAddToCart(bookDetails)}
            >
              Add to cart.
            </button>
          ) : (
            <Link
              to="/cart"
              style={{ textDecoration: "none", color: "#fb923c" }}
            >
              Proceed to cart
            </Link>
          )}
        </div>
      }
    </div>
  );
};
export default BookDetails;
