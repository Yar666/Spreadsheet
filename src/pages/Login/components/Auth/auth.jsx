import React from "react"
import "./auth.css"

export const Auth = () => {
  return (
    <div className={`auth`}>
      <div className="overlap">
        <div className="login1">Login</div>
        <input className="input" placeholder="login" />
      </div>
      <div className="overlap-1">
        <div className="password">Password</div>
        <input className="input" placeholder="password" type="password" />
      </div>
    </div>
  )
}
