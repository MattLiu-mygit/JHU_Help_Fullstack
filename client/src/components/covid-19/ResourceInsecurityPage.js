import React from 'react';
import Collapsible from '../Collapsible';

const ResourceInsecurityPage = () => {
    return (<>
        <h2>Resource Insecurity</h2>
        <Collapsible className='outerCollapsible' title='General Assistance' content={<>
            <p>Call 211 for help locating local services. More info <a href='http://211.org/services/covid19?fbclid=IwAR2yApojQMITCQORYZC2UPVqgkqThXx7HZBQFav8cV6W9sLdFkwmg84yoh4'>here</a></p>
            <p><a href='https://findhelp.org/?fbclid=IwAR1ndLeJSN0d3sORgSv9JkJYmLnHs3qeUKpjEoN0I5WhdQs2wOgeP0_swVY'>Search engine</a> to find local food banks, rent assistance and more, including new programs specially for the COVID-19 crisis.</p>
        </>} />
        <Collapsible className='outerCollapsible' title='Food Insecurity' content={<>
            <Collapsible title='General Resources' content={<>
                <p><b>Find Food Banks</b> by the <a href='https://www.feedingamerica.org/find-your-local-foodbank'>Food Bank Locator</a></p>
                <p><b>SNAP (Food Stamp) Application Assistance</b> found <a href='https://www.feedingamerica.org/need-help-find-food/apply-for-food-assistance'>here</a><p><i> Students not on a meal plan are eligible for food stamps.</i></p></p>
                <p>
                    <b>Reimbursement for Food Stamp Groceries (up to $50)</b> found <a href='https://www.expensify.org/hunger#reimbursement'>here</a>
                    <p>
                        Expensify will reimburse up to $50 per family for groceries purchased with SNAP.
                        <p><i>Cannot guarantee reimbursement for everyone;</i> max reimbursement is $50.
                        <p>A step-by-step guide can be found <a href='https://community.expensify.com/discussion/6527/expensify-org-temporarily-pivots-to-support-snap-beneficiaries-during-the-covid-19-pandemic/p1?new=1'>here.</a></p></p>
                    </p>
                </p>
            </>} />
            <Collapsible title='Hopkins/Baltimore Specific' content={<>
                <p>
                    <b>JHU Department of Student Outreach & Support</b>
                    <p>
                        List of Food Insecurity Resources <a href='https://studentaffairs.jhu.edu/student-life/student-outreach-support/?fbclid=IwAR2GOiasscAK_BZoClAHl9ZezCD_oFXJVgvKzxZh8dXLTOgHbrjLBlIG-jU'>here</a>
                        <p>Get connected with a case manager by phone (410) 516-7857, <a href='https://jhu-advocate.symplicity.com/care_report/index.php/pid056360?'>form</a>, or email deanofstudents@jhu.edu</p>
                    </p>
                </p>
                <p><b>Baltimore area food banks and assistance</b> found <a href='https://l.facebook.com/l.php?u=http%3A%2F%2F211.org%2Fservices%2Fcovid19%3Ffbclid%3DIwAR2yApojQMITCQORYZC2UPVqgkqThXx7HZBQFav8cV6W9sLdFkwmg84yoh4&h=AT1-F02tVWoSbH73NCfFUpPeBcOTXgPHPL4WNP55VNl5BpXzKFTxcK3E5vqBZm3toYbmFDzbSSTrwErgNv0RBS3K_HtmbmOmMjxuZT7iEMWbmAMY3nsxY-UL1pa14Mpca3sVrw'>here</a></p>
            </>} />
            <Collapsible title='New York & New Jersey Specific Resources:' content={<>
                <p>Free meals, 3x a day <a href='https://www.schools.nyc.gov/school-life/food/free-meals'>here</a>.</p>
                <p>
                    Free grocery delivery <a href='https://www.invisiblehandsdeliver.com/?fbclid=IwAR2GW3McV5QD1qusQmB732cO1-HkENGR9ozTofIMUo_6lEDfH4Bgfvyfjms'>here</a>
                    <p>Grocery & Supplies Delivery service to those heavily affected by COVID-19.
                    <p><b>Due to high volume of requests, not taking any new ones until April 6th</b></p>
                    </p>
                </p>
                <p>Grocery fund for the black community <a href='https://docs.google.com/forms/d/e/1FAIpQLSeuzC2S8IU2oL1tqrH-U2DxDegNfe2-JZjrhZots0kV-tr4jA/closedform'>here</a>
                    <p><b>Form closed until, earliest, April 20th</b></p>
                </p>
                <p>Grocery fund for the black trans community <a href='https://docs.google.com/forms/d/e/1FAIpQLScsH-RV_XrMkgH-JXIu7VDGlKXOC-Sp3VKglGlK4_AFQxNiPQ/viewform?edit_requested=true'>here</a></p>
            </>} />
        </>} />
        <Collapsible className='outerCollapsible' title='Wifi Insecurity' content={<>
            <Collapsible title='Spectrum' content={<>
                <p>Call 1-844-488-8395 to enroll your household for free Wifi for 60 days</p>
                <p>Check out their WiFi hotspots <a href='https://www.spectrum.com/wifi-hotspots.html'>here</a>.</p>
                <p>Find out more about this <a href='https://www.businessinsider.com/coronavirus-free-spectrum-internet-wifi-offer-student-households-promotion-2020-3'>here</a>.</p>
            </>} />
            <Collapsible title='Comcast/XFinity' content={<>
                <Collapsible title='Free Hotspots' content={<><p>Xfinity WiFi hotspots across the country will be available to anyone who needs them for free – including non-Xfinity Internet subscribers. For a map of Xfinity WiFi hotspots, check them <a href='www.xfinity.com/wifi'>here</a>. Once at a hotspot, consumers should select the “xfinitywifi” network name in the list of available hotspots and then launch a browser.</p>
                    <p>Learn more <a href='https://corporate.comcast.com/covid-19'>here</a>.</p>
                </>} />
                <Collapsible title='Internet Essentials Free to New Customers' content={<>
                    <p>Internet Essentials Free to New Customers: New customers will receive 60 days of complimentary Internet Essentials service. Additionally, for all new and existing Internet Essentials customers, the speed of the program’s Internet service was increased to 25 Mbps downstream and 3 Mbps upstream.</p>
                    <p>Learn more <a href='https://corporate.comcast.com/covid-19'>here</a>.</p>
                </>} />
            </>} />
            <Collapsible title='AT&T' content={<>
                <Collapsible title='Free Hotspots' content={<>
                    <p>Free connection to hotspots. Learn more <a href='https://www.att.com/support/article/wireless/KM1103818'>here</a>.</p>
                    <p>No hotspot map, so it's recommended to use a <b>hotspot locator app</b>.</p>
                </>} />
                <Collapsible title='$5 or $10 Monthly Options' content={<>
                    <p>WiFi through Access from AT&T Program.</p>
                    <p>Learn more <a href='https://www.att.com/shop/internet/access/#!/'>here</a>.</p>
                </>} />
            </>} />
            <Collapsible title='Altice - Optimum/Suddenlink' content={<>
                <p>866-200-9522 to enroll in Optimum region.</p>
                <p>888-633-0030 to enroll in Suddenlink region.</p>
                <p>Learn more <a href='https://www.alticeusa.com/news/articles/feature/corporate/altice-usa-brings-free-broadband-k-12-and-college-students-during-coronavirus-pandemic'>here</a>.</p>
            </>} />
        </>} />
    </>);
}

export default ResourceInsecurityPage;