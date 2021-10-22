import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Pages/getData.css";
import { useHistory } from "react-router";
import Jwelery from "../Categories/Jwelery";
import Electronics from "../Categories/Electronics";
import Mens from "../Categories/Mens";
import WoMens from "../Categories/WoMens";

const GetCategories = () => {
  const [catg, setCatg] = useState("");
  const history = useHistory();

  return (
    <>
      <button onClick={() => history.push("/get")}>back</button>
      <h1>Same categories</h1>
      <div className="button_row">
      <button onClick={() => setCatg("jwelery")}>jwelery</button>
      <button onClick={() => setCatg("electronics")}>Electronics</button>
      <button onClick={() => setCatg("men's clothing")}>Mens clothing</button>
      <button onClick={() => setCatg("women's clothing")}>Womens clothing</button>
      </div>
      {catg === "jwelery" && <Jwelery />}
      {catg === "electronics" && <Electronics />}
      {catg === "men's clothing" && <Mens />}
      {catg === "women's clothing" && <WoMens />}
    </>
  );
};
export default GetCategories;
