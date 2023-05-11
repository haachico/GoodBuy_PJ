import { useContext, useState } from "react";

import Book from "./Book";
import { booksContext } from "..";

const Cart = () => {
  const { data, setData, cartItems, setCartItems, backupData, setBackupData } =
    useContext(booksContext);
  const [savedItems, setSavedItems] = useState([]);

  const total = cartItems.reduce(
    (acc, curr) => acc + curr.qty * curr.data?.saleInfo?.listPrice?.amount,
    0
  );

  const increaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item?.data?.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item?.data?.id === id
          ? { ...item, qty: item.qty !== 0 ? item.qty - 1 : 0 }
          : item
      )
    );
  };

  const handleDeleteBtn = (id) => {
    setCartItems(cartItems.filter((book) => book?.data?.id !== id));
  };

  const handleSaveClick = (id) => {
    setCartItems(cartItems.filter((item) => item.data.id !== id));
    setSavedItems([
      ...savedItems,
      ...backupData.filter((item) => item.data.id === id),
    ]);
  };

  console.log(savedItems, "SAVEDITEMS");

  const handleAddBackToCartClick = (id) => {
    setSavedItems(savedItems.filter((item) => item.data.id !== id));
    setCartItems([
      ...cartItems,
      ...backupData.filter((item) => item.data.id === id),
    ]);
  };
  return (
    <>
      <div className="cart--page">
        {/* <div>{JSON.stringify(cartItems)}</div> */}

        {cartItems.length === 0 ? (
          <h3>No items in the cart yet.</h3>
        ) : (
          <>
            <div>
              {cartItems?.map((book) => (
                <div className="cart--card">
                  <div>
                    <img
                      src={book.data?.volumeInfo?.imageLinks?.smallThumbnail}
                    />
                  </div>
                  <div className="title--price">
                    <h3>Title : {book?.data?.volumeInfo?.title}</h3>
                    <p> Price : Rs {book?.data?.saleInfo?.listPrice?.amount}</p>

                    <span>
                      <button
                        onClick={() => decreaseQty(book?.data?.id)}
                        style={{ margin: "5px", backgroundColor: "#fef2f2" }}
                      >
                        -
                      </button>
                    </span>
                    <span>Qty : {Number(book.qty)}</span>

                    <span>
                      <button
                        onClick={() => increaseQty(book?.data?.id)}
                        style={{ margin: "5px", backgroundColor: "#fef2f2" }}
                      >
                        +
                      </button>
                    </span>

                    <div>
                      <button
                        onClick={() => handleSaveClick(book?.data?.id)}
                        className="save--btn"
                      >
                        Save for later
                      </button>
                    </div>
                  </div>
                  <button
                    className="delete--btn"
                    onClick={() => handleDeleteBtn(book?.data?.id)}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
            <div className="checkout--card">
              <h2 className="total--amount">TOTAL</h2>
              <div className="checkout--details">
                <div>
                  <p>Sub total : </p>
                  <p>Delivery : </p>
                  <h3>Total : </h3>
                </div>
                <div>
                  <p> Rs {Math.round(total)}</p>
                  <p>0</p>
                  <h3> Rs {Math.round(total)}</h3>
                </div>
              </div>
              <button>Proceed to checkout</button>
            </div>
          </>
        )}
      </div>

      <div className="saved--page">
        {savedItems.length === 0 ? (
          ""
        ) : (
          <>
            <hr />
            <div className="saved--page">
              <h3>Saved for later({savedItems.length})</h3>
              {savedItems?.map((book) => (
                <div className="saved--card">
                  <div>
                    <img
                      src={book.data?.volumeInfo?.imageLinks?.smallThumbnail}
                    />
                  </div>
                  <div className="title--price">
                    <h3>Title : {book?.data?.volumeInfo?.title}</h3>
                    <p> Price : Rs {book?.data?.saleInfo?.listPrice?.amount}</p>

                    <button
                      onClick={() => handleAddBackToCartClick(book.data.id)}
                      className="save--btn"
                    >
                      Add back to cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
