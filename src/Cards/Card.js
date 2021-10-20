import React from "react";
import "../Cards/Card.css";
import { useHistory } from "react-router-dom";
const Card = () => {
  const history = useHistory();
  return (
    <>
    <h1>Main Page</h1>
    <div className="main">
      <div className="card1">
        <div className="section">
          <h1>fetching Data</h1>

          <button onClick={() => history.push("/get")} className="btn">
            getData
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Card;
