import React from "react";
import Book from "./Book";

//Note that we import useSearchParams from "react-router-dom" and not "react"

//Note that we import useSearchParams from "react-router-dom" and not "react"

//Also, an overview of whole useSearcParams here, so that you understand better below comments wrt useSearchparams.

//We import useSearchParams hook from "reat-router-dom". It returns an array of searchParams and setSearchParams just like useState

//We use setSearchParams to set (query) parameters to the URL from buttons or Link by passing an obj

//We use searchParams.get(key) to fetch the set query parameter's (key's) value from the URL and filter accordingly (see below example for reference/understanding)

//Check useLocation comment there in detail page

import { Link, useSearchParams, useLoaderData } from "react-router-dom";

export const loader = () => {
  return fetch(
    "https://www.googleapis.com/books/v1/volumes?q=allgenres=paid-books&key=AIzaSyATSMjI2Zaim9CnEn3GyJHNfFzBVVgRzFg" +
      "&maxResults=40"
  )
    .then((response) => response.json())
    .then((data) => data.items);
};

const Books = () => {
  const data = useLoaderData();
  console.log(data, "data");

  //useSearchParams returns an array of serachParams and setIsLoading, just like useState
  const [searchParams, setSearchParams] = useSearchParams();

  //This basically fetches the VALUE of whatever we type in URL after "?", basically reading the query parameter/s
  const typeFilter = searchParams.get("category");
  console.log(typeFilter, "typeFilter");

  //We say that if there is a type/category/etc in the URL after "?", filter the data matching the value fetched or display all the data
  const displayedBooks = typeFilter
    ? data?.filter((book) => book?.volumeInfo?.categories?.includes(typeFilter))
    : data;

  const handleFilterChange = (key, value) => {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ marginTop: "1rem" }}>Happy Exploring!</h1>
      <div className="filter--btns">
        {/* This is one way of passing the query parameters, but merging more than one querry parameters won't work with this way */}

        {/* <button
          onClick={() => setSearchParams({ categories: "Fiction" })}
          className="fition"
        >
          Fiction
        </button>
        <button
          onClick={() => setSearchParams({ categories: "Juvenile Fiction" })}
          className="children"
        >
          Children books
        </button>
        <button onClick={() => setSearchParams({})} className="all">
          All{" "}
        </button> */}

        {/* This is another way of passing querry parameter/s where we can pass/merge more than one querry parameter  */}
        <button
          onClick={() => handleFilterChange("category", "Fiction")}
          className="fition"
        >
          Fiction
        </button>
        <button
          onClick={() => handleFilterChange("category", "Juvenile Fiction")}
          className="children"
        >
          Children books
        </button>
        <button
          onClick={() => handleFilterChange("category", null)}
          className="all"
        >
          All{" "}
        </button>
      </div>
      <div className="books--component">
        {displayedBooks?.map((e) => {
          let thumbnail =
            e.volumeInfo?.imageLinks && e.volumeInfo?.imageLinks.smallThumbnail;
          let amount = e.saleInfo.listPrice && e.saleInfo.listPrice.amount;

          if (thumbnail !== undefined && amount !== undefined) {
            return (
              // It is a relative path, so it is written like this in path (with no "/"). Please check the comment in Book details for reference.

              //Now we also use the fetched whole query paramater (that is not only value but key-value) by stringifying it (check below for better understanding) and passing it to State prop in Link from where we are naigating to detailed page. Doing so helps us maintain the state of current page even when we go to the detailed page, with the help of useLocation hook there in detailed page which captures the query parameter of the current page to come only to this page.

              <Link
                to={`${e.id}`}
                key={e.id}
                state={{
                  search: `?${searchParams.toString()}`,
                  type: typeFilter,
                }}
              >
                <Book
                  img={thumbnail}
                  title={e.volumeInfo.title}
                  price={amount}
                  key={e.id}
                />
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Books;
