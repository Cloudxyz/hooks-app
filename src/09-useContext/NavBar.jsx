import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
        <Link className="navbar-brand" to="/">UseContext</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
            <div className="navbar-nav">
                <NavLink to="/" className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`}>
                    Home
                </NavLink>
                <NavLink to="/about" className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`}>
                    About
                </NavLink>
                <NavLink to="/login" className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`}>
                    Login
                </NavLink>
            </div>
        </div>
    </nav>
  )
}
