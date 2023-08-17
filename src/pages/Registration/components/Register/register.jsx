import React from "react";
import "./register.css";

export const Auth = () => {
  return (
    <div className={`reg`}>
      <div className="overlap">
        <div className="login1">Login</div>
        <input className="input" placeholder="login"/>
      </div>
      <div className="overlap-1">
        <div className="password">Password</div>
        <input className="input" placeholder="password" type="password"/>
      </div>
      <div className="overlap-2">
        <div className="confirm-password">Confirm Password</div>
        <input className="input" placeholder="password" type="password"/>
      </div>
      
      
    </div>
  );
};
