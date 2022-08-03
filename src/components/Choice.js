import "../styles/App.css";
import "../styles/Choice.css";
import {Link} from "react-router-dom";
import React from "react";

const Choice = params => {
  return (
    <div className="choice">
      <div className="choice__container">
        <h1>{params.name}</h1>
        <p>{params.description}</p>
        <Link to="/"><button className="button">{params.buttonName}</button></Link>
      </div>
    </div>
  );
}

export default Choice;
