import React from "react";
import { useNavigate } from "react-router-dom";

const Details = () => {
  let navigate = useNavigate();
  function goForward() {
    navigate(1);
  }

  return (
    <div>
      <div>
        <h2>Understanding browser router</h2>
        <p>
          In this HOS we are implementing routing using BrowserRouter. <br />
          You can learn more{" "}
          <a
            href="https://reactrouter.com/en/main/router-components/browser-router"
            target="_blank"
            rel="noopener noreferrer"
          >
            Here
          </a>
        </p>
      </div>
      <button className="btn" onClick={goForward}>
        Go Next
      </button>
    </div>
  );
};

export default Details;
