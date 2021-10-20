import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Pages/getData.css";
import { useHistory } from "react-router";

const AllData = () => {
  const history = useHistory();
  const url1 = "https://fakestoreapi.com/products?limit=5";
  const [limit, setLimit] = useState([]);

  useEffect(() => {
    async function fetchingData() {
      try {
        const fetch = await axios.get(url1);
        setLimit(fetch.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchingData();
  }, []);
  return (
    <>
      <button onClick={() => history.push("/get")}>back</button>
      <h1>all datad</h1>
      <div className="main_data">
        <div className="section_1">
          <table style={{ border: "1px solid black" }}>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>Price</th>
              <th>description</th>
              <th>category</th>
            </tr>
            {limit.map((v, index) => {
              return (
                <tr key={v.id}>
                  <td>{v.id}</td>
                  <td>{v.title}</td>
                  <td>{v.price}</td>
                  <td>{v.description}</td>
                  <td>{v.category}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};
export default AllData;
