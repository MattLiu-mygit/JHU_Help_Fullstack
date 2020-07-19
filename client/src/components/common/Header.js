import React from 'react';
import { NavLink } from 'react-router-dom';
const headerButton = {
  padding: '0.2rem',
  borderRadius: '0px',
  border: 'none',
  outline: 'none',
  boxShadow: 'none',
  marginBottom: '0.1rem',
  marginTop: '0.1rem',
};
function Header() {
  const activeStyle = {
    color: '#89cff0',
    backgroundColor: 'transparent',
  };
  return (
    <nav className="headerBar" style={{ color: '#D8D8D8' }}>
      <NavLink
        className="btn btn-primary header-btn first-btn"
        style={headerButton}
        activeStyle={activeStyle}
        to="/"
        exact
      >
        Home
      </NavLink>
      {'|'}
      <NavLink
        className="btn btn-primary header-btn"
        style={headerButton}
        activeStyle={activeStyle}
        to="/covid-19"
      >
        {' '}
        Covid-19 Pandemic Resources
      </NavLink>
      {'|'}
      <NavLink
        className="btn btn-primary header-btn"
        style={headerButton}
        activeStyle={activeStyle}
        to="/maryland-911-alternatives"
      >
        {' '}
        Maryland 911 Alternatives
      </NavLink>
      {'|'}
      <NavLink
        className="btn btn-primary header-btn"
        style={headerButton}
        activeStyle={activeStyle}
        to="/help-us"
      >
        {' '}
        Help us help you
      </NavLink>
      {'|'}
      <NavLink
        className="btn btn-primary header-btn"
        style={headerButton}
        activeStyle={activeStyle}
        to="/data"
      >
        {' '}
        Source Data and APIs
      </NavLink>
      {'|'}
      <NavLink
        className="btn btn-primary header-btn"
        style={headerButton}
        activeStyle={activeStyle}
        to="/contact"
      >
        {' '}
        Contact
      </NavLink>
    </nav>
  );
}

export default Header;
