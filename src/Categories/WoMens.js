import React from 'react'
import  { useState, useEffect } from "react";
import axios from 'axios';
import { useHistory } from 'react-router';
const WoMens=()=>{
    const history=useHistory();
    const url3 = `https://fakestoreapi.com/products/category/women's clothing`;
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    async function fetchingData() {
      try {
        const fetch = await axios.get(url3);
        setCategories(fetch.data);
        console.log(fetch.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchingData();
    
   
  }, []);
  

 
  return (
    <>
      {/* <button onClick={() => history.push("/get")}>back</button> */}
      <h1>Same categories</h1>
      {/* <button onClick={()=>setCatg("jwelery")} >jwelery</button> */}
      <div className="main_data">
        <div className="section_1">
          <table style={{ border: "1px solid black" }}>
            <tr>
              <th>Data</th>
              {/* <th>title</th>
              <th>Price</th>
              <th>description</th>
              <th>category</th> */}
              
            </tr>
            {categories.map((v, index) => {
              return (
                <tr key={v.id}>
                 <td>
                      <div className="main_product">
                        <div className="card_main">
                          <div className="photose">
                            <img
                              className="images_product"
                              src={v.image}
                              alt="product"
                            />
                          </div>
                          <div>
                            <p>
                              <span className="product_heading">ID: </span>
                              {v.id}
                            </p>
                            <p>
                              <span className="product_heading">Price: </span>
                              {v.price}
                            </p>
                            <p>
                              <span className="product_heading">
                                description:{" "}
                              </span>
                              {v.description}
                            </p>
                            <p>
                              <span className="product_heading">
                                category:{" "}
                              </span>
                              {v.category}
                            </p>
                           
                          </div>
                        </div>
                      </div>
                    </td>

                 
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );

}
export default WoMens;