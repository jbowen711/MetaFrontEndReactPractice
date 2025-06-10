import React from "react";
import { useState } from "react";

function LoginButton(props) {
    return (
        <button onClick={props.login}>
            Login
        </button>
    )

}

export default LoginButton;