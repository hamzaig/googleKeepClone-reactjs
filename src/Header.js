import React from "react";
import logo from "./images/download.png"

const Header = () => {
    return (
        <>
            <div className="header">
                <img src={logo} alt="logo" width="50"/>
                <h1 className="mainHeading">Hamzaig Note</h1>
            </div>
        </>
    );
};

export default Header;

