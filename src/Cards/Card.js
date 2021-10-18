import React from "react";
import "../Cards/Card.css";
import { NavLink } from "react-router-dom";
const Card = () => {
  return (
    <div className="main">
      <div className="card">
        <div className="section">
          <h1>fetching Data</h1>

          <button className="btn">
            <NavLink to="/get">get</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
