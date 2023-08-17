
import React from "react";
import { Link } from "react-router-dom";
import { LogViaGoogle } from "./components/Log_Via_Google/log";
import { Auth } from "./components/Auth/auth";
import "./style.css";

export const LoginPage = () => {
  return (
    <div className="login">
      <div className="div-2">
      <LogViaGoogle />
          <Auth />
          <div className="continue-btn">
              <Link to="/Home_page"><div className="continue-button">Continue</div></Link>
          </div>
          <div className="haven-t-an-account"><Link to="/registration">haven&#39;t an account?</Link></div>
      </div>
    </div>
  );
};