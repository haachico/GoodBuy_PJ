import { createContext, useEffect, useState } from "react";

export const booksContext = createContext();

export const Provider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [data, setData] = useState([]);
  const [backupData, setBackupData] = useState([]);
  const [qty, setQty] = useState(1);

  const getData = async () => {
    const response = await fetch(
      "https://www.googleapis.com/books/v1/volumes?q=allgenres=paid-books&key=AIzaSyATSMjI2Zaim9CnEn3GyJHNfFzBVVgRzFg" +
        "&maxResults=40"
    );
    const result = await response.json();

    setData(result.items);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data, "daaaataaaa");

  return (
    <div>
      <booksContext.Provider
        value={{
          cartItems,
          setCartItems,
          data,
          setData,
          qty,
          setQty,
          backupData,
          setBackupData,
        }}
      >
        {children}
      </booksContext.Provider>
    </div>
  );
};
