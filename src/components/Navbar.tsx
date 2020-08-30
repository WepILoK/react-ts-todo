import React from "react";
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper grey darken-4 px1">
                <a href="/" className="brand-logo">React + TypeScript</a>
                <ul className="right hide-on-med-and-down">
                    <li>
                        <NavLink to="/">Список дел</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">Инвормация</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
};