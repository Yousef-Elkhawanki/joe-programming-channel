import React from 'react'
import "./box.css"
export default function Box({ children, auth }) {
    return auth ?<div className="box">{children}</div>:<h1>Unauthnicated</h1>;
}
