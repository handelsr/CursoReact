import React from 'react';
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link className="navbar-brand" to="/"> useContext </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav">
                    <NavLink end className={ isActive => "nav-link" + ( isActive ? " active" : "" ) } to="/">Home</NavLink>
                    <NavLink end className={ isActive => "nav-link" + ( isActive ? " active" : "" ) } to="/about">About</NavLink>
                    <NavLink end className={ isActive => "nav-link" + ( isActive ? " active" : "" ) } to="/login">Login</NavLink>
                </div>
            </div>
        </nav>
    )
}
