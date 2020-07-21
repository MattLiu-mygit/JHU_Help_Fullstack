import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import DropList from './DropList';
const headerButton = {
  padding: '0.2rem',
  borderRadius: '0px',
  border: 'none',
  outline: 'none',
  boxShadow: 'none',
  marginBottom: '0.1rem',
};
function Header() {
  const [activeDropList, setActiveDropList] = useState(0);
  const [headerActive, setHeaderActive] = useState(false);

  const covidList = [
    {
      name: 'Mental and Emotional Resources',
      path: '/covid-19/mental-emotional',
    },
    {
      name: 'Unstable Income',
      path: '/covid-19/unstable-income',
    },
    {
      name: 'Resource Insecurity',
      path: '/covid-19/resource-insecurity',
    },
    {
      name: 'College Help',
      path: '/covid-19/college-help',
    },
    {
      name: 'Homeschooling and Childcare',
      path: '/covid-19/childcare',
    },
    {
      name: 'Report Racism/Hate Crimes',
      path: '/covid-19/report',
    },
    {
      name: 'DIY Projects and Fun',
      path: '/covid-19/diy-fun',
    },
    {
      name: 'How you can help!',
      path: '/covid-19/your-help',
    },
  ];
  let location = useLocation();
  const activeStyle = {
    color: '#89cff0',
    backgroundColor: 'transparent',
  };
  return (
    <>
      <nav
        className="headerBar"
        style={{ color: '#D8D8D8' }}
        onMouseLeave={() => {
          if (window.innerWidth < 840) {
            setHeaderActive(false);
            setActiveDropList(0);
          }
        }}
      >
        {headerActive || window.innerWidth > 840 ? (
          <div>
            <NavLink
              className="btn btn-primary header-btn first-btn"
              style={headerButton}
              activeStyle={activeStyle}
              to="/"
              exact
              onMouseEnter={() => {
                setActiveDropList(0);
              }}
            >
              Home
            </NavLink>
            {'|'}
            <NavLink
              className="btn btn-primary header-btn"
              style={headerButton}
              activeStyle={activeStyle}
              to="/covid-19"
              onMouseEnter={() => {
                setActiveDropList(1);
              }}
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
              onMouseEnter={() => {
                setActiveDropList(0);
              }}
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
              onMouseEnter={() => {
                setActiveDropList(0);
              }}
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
              onMouseEnter={() => {
                setActiveDropList(0);
              }}
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
              onMouseEnter={() => {
                setActiveDropList(0);
              }}
            >
              {' '}
              Contact
            </NavLink>
          </div>
        ) : null}

        {(activeDropList === 1 || location.pathname.includes('/covid-19')) &&
        headerActive ? (
          <div
            onMouseLeave={() => {
              setActiveDropList(0);
            }}
            style={{
              paddingBottom: '0.1rem',
              backgroundColor: 'rgba(7, 66, 122, 0.5)',
              width: '100%',
            }}
          >
            <DropList content={covidList} />
          </div>
        ) : null}
        {window.innerWidth < 840 ? (
          <div
            className="headerBar"
            style={{ textAlign: 'center', color: 'white' }}
            onMouseEnter={() => {
              setHeaderActive(true);
            }}
          >
            ☰
          </div>
        ) : null}
      </nav>
    </>
  );
}

export default Header;
