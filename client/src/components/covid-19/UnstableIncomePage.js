import React from 'react';
import Collapsible from '../Collapsible';

const UnstableIncomePage = () => {
    return (<>
        <h2>Unstable Income</h2>
        <Collapsible className='outerCollapsible' title='JHU Emergency Appeal Form' content={<>
            <p> Appeal form can be found <a href='https://finaid.jhu.edu/wp-content/uploads/2017/03/1920_Appeal.pdf'>here</a></p>
            <p>If you need further financial assistance due to the emergency COVID-19 pandemic, including unexpected travel costs, rent, food insecurity, Wifi, etc., fill out the 2019-2020 appeal form. You do not need to fill out the income information section (page 2). Include documentation/receipts for reimbursements (plane tickets, WiFi bill, etc.). Reimbursements will be handled via BankMobile Refund, with a wait time of up to 14 days, so if your need is more urgent than that, reach out to your financial aid adviser.</p>
        </>} />
        <Collapsible className='outerCollapsible' title='Microgrant from Humanity Forward ($250-$500)' content={<>
            <p>Sign up <a href="https://docs.google.com/forms/d/e/1FAIpQLSfj1LKD8kAQJDlMUSsMjVb70PRl5K87_jaZ7KqrXZwJDKfR-g/viewform?emci=3334c6f8-fd69-ea11-a94c-00155d03b5dd&emdi=ea000000-0000-0000-0000-000000000001&ceid">here</a></p>
            <p>Andrew Yang’s nonprofit organization is giving small grants to those affected by the pandemic. </p></>} />
        <Collapsible className='outerCollapsible' title='Reimbursement for Food Stamp Groceries (up to $50)' content={<>
            <p>Expensify will reimburse up to $50 per family for groceries purchased with SNAP.</p>
            <p><b>Cannot guarantee reimbursement for everyone</b>; max reimbursement is $50</p>
            <p>Find out more <a href='https://www.expensify.org/hunger#reimbursement'>here</a></p>
            <p>An illustreated step-by-step guide can be found <a href='https://community.expensify.com/discussion/6527/expensify-org-temporarily-pivots-to-support-snap-beneficiaries-during-the-covid-19-pandemic/p1?new=1'>here</a></p>
        </>} />
        <Collapsible className='outerCollapsible' title='JCash Refund' content={<>
            <p>Email jcard@jhu.edu and they will send the remaining account as a check to your home</p>
        </>} />
        <Collapsible className='outerCollapsible' title='Funds for Children of Restaurant Employees' content={<>
            Learn more <a href='https://ofwemergencyfund.org/help'>here</a>
        </>} />
    </>);
}
export default UnstableIncomePage;