import React from "react";
import BitcoinImg from "../../images/BitcoinImg.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Error = ({ setGetInputValue }) => {
  return (
    <div className="error__content">
      <div className="error__type">
        <h1>
          0.0000<span>4</span>
          <BitcoinImg />
          <span>4</span>
        </h1>
        <h5>BTC</h5>
      </div>

      <p>Oh, damn, no hash found..</p>
      <button
        className="error__button"
        onClick={() => setGetInputValue("bitcoin")}
      >
        <FontAwesomeIcon icon={faArrowLeft} /> Go back
      </button>
    </div>
  );
};

export default Error;
