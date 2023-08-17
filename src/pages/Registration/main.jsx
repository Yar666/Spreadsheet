
import React from "react";
import { Link } from "react-router-dom";
import { LogViaGoogle } from "./components/Log_Via_Google/log";
import { Auth } from "./components/Register/register";
import "./style.css";

export const RegisterPage = () => {
  return (
    <div className="login">
      <div className="div-2">
      <LogViaGoogle />
          <Auth />
          <div className="continue-btn">
              <Link to="/Home_page"><div className="continue-button">Continue</div></Link>
          </div>
          <div className="already-have"><Link to="/">already have an account?</Link></div>
      </div>
    </div>
  );
};