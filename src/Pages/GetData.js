import React, { useState, useEffect } from "react";
import PostData from "./PostData";
import AllData from "./AllData";
import GetOneData from "../Pages/GetOneData";
import GetCategories from "./GetCategories";
import CartData  from "./CartData";
import GetProductLimit from "../Pages/GetProductLimit";
const GetData = () => {
  
  const [open, setOpen] = useState(false);
  
  const [active, setActive] = useState("");

  
  // console.log("checking data", product);

  const SetData = () => {
    setOpen(true);
    console.log("true");
  };
  const First = () => {
    setActive("first");
  };
  const Second = () => {
    setActive("two");
  };
  const Third = () => {
    setActive("third");
  };
  const Fourth = () => {
    setActive("fourth");
  };
  const Five = () => {
    setActive("five");
  };
  const Six = () => {
    alert("six");
  };
  return (
    <>
      <h1>
        geting data page<button onClick={SetData}>ADD</button>
      </h1>
      { open ? (
        <PostData data={setOpen}  />
      ) : (
        console.log("error")
      )}
      <div className="collection_btn">
        <button className="event-btn" onClick={First}>
          A
        </button>

        <button className="event-btn" onClick={Second}>
          B
        </button>

        <button className="event-btn" onClick={Third}>
          C
        </button>

        <button className="event-btn" onClick={Fourth}>
          D
        </button>

        <button className="event-btn" onClick={Five}>
          E
        </button>

        <button className="event-btn" onClick={Six}>
          F
        </button>
      </div>
      <div>
        {
          active==="first" && <AllData/>
        }
        {
          active==="two" && <GetOneData/>
        }
        {
          active==="third" && <GetCategories/>
        }
        {
          active==="fourth" && <CartData/>
        }
         {
          active==="five" && <GetProductLimit/>
        }
      </div>
      
    </>
  );
};
export default GetData;
