import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Pages/getData.css";
import { useHistory } from "react-router";
const CartData = () => {
  const history = useHistory();
  const url3 = "https://fakestoreapi.com/carts?userId=1'";
  const [Cart, setCart] = useState([]);

  useEffect(() => {
    async function fetchingData() {
      try {
        const fetch = await axios.get(url3);
        setCart(fetch.data);
        console.log(fetch.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchingData();
  }, []);
  return (
    <>
      <button onClick={() => history.push("/get")}>back</button>
      <h1> Cart Data</h1>
      <div className="main_data">
        <div className="section_1">
          <table style={{ border: "1px solid black" }}>
            <tr>
              <th>id</th>
              <th>userId</th>
              <th>date</th>
            </tr>
            {Cart.map((v, index) => {
              return (
                <tr key={v.id}>
                  <td>{v.id}</td>
                  <td>{v.userId}</td>
                  <td>{v.date}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};
export default CartData;
