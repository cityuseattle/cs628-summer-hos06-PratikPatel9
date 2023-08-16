import React, { useState } from "react";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";

const Team = () => {
    // const [redirectToHome, setRedirectToHome] = useState(false);

    // const handleRedirectToHome = () => {
    //     setRedirectToHome(true);
    // }

    let navigate = useNavigate();

    function redirectToHome(){
        navigate("/");
    }

    function goBack() {
        navigate(-1);
    }
    // function goNext(){
    //     navigate(1);
    // }

    // if (redirectToHome){
    //     return <Navigate to="/"/>
    // }
  return (
    <div>
      <h2> This is Team Component</h2>
      <div>
        <ul>
          <li>
            <Link to="/team/member/1">Member 1</Link>
          </li>
          <li>
            <Link to="/team/member/2">Member 2</Link>
          </li>
          <li>
            <Link to="/team/member/3">Member 3</Link>
          </li>
          <li>
            <Link to="/team/member/4">Member 4</Link>
          </li>
        </ul>
        {/* We are adding a button here to trigger redirect action*/}
        <button className="btn" onClick={goBack}>
          Go Back
        </button>
        {/* <button className="btn" onClick={handleRedirectToHome}>
          Redirect To Home
        </button> */}
        <button className="btn" onClick={redirectToHome}>
          Redirect To Home
        </button>
        {/* <button className="btn" onClick={goNext}>
          Go Next
        </button> */}
      </div>
      <Outlet />
    </div>
  );
};

export default Team;
