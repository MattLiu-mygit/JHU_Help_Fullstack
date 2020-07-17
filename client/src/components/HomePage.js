import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return <>
        <div className='bg-image'></div>
        <div className='jumbotron'>
            <div className='bg-text'>
                <h1 style={{ marginBottom: '2rem' }}>JHU Help</h1>
                <h4><b>Check these out!</b></h4>
                <p></p>
                <h4>
                    <b>
                        <div className='frontPageLink'><Link to='/covid-19' >Check out our Covid-19 pandemic resources!</Link></div>
                        <div className='frontPageLink'><Link to='/maryland-911-alternatives' >Maryland 911 Alternatives</Link></div>
                        <div className='frontPageLink'><Link to='/help-us' >Help us help you!</Link></div>
                    </b>
                </h4>
            </div>
        </div>

    </>
}
export default HomePage;