import React from "react";
import "./log.css";
import google_logo from "../../../../assets/google_ico.png";
export const LogViaGoogle = () => {
  return (
    <div className={`log-via-google`}>
      <div className="text-wrapper">Log via google</div>
      <img className="ico" alt="Ico" src={google_logo} />
    </div>
  );
};
