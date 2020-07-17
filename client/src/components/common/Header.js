import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    const activeStyle = { color: 'orange' };
    return <nav>
        <NavLink activeStyle={activeStyle} to='/' exact>Home</NavLink> {' / '} <NavLink activeStyle={activeStyle} to='/covid-19'>Covid-19 Pandemic Resources</NavLink> {' / '}<NavLink activeStyle={activeStyle} to='/maryland-911-alternatives'>Maryland 911 Alternatives</NavLink> {' / '} <NavLink activeStyle={activeStyle} to='/help-us'>Help us help you</NavLink> {' / '} <NavLink activeStyle={activeStyle} to='/contact'>Contact</NavLink>
    </nav>
}

export default Header;