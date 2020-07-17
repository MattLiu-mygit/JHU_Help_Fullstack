import React from 'react';
import Collapsible from '../Collapsible';

const MentalEmotionalHelp = () => {
    return (<>
        <h2>Mental and Emotional Resources</h2>
        <p>Some tips for self-care while socializing can be found <a href='https://hub.jhu.edu/2020/03/26/self-care-coronavirus-tips/?utm_source=fb&utm_medium=sm&utm_campaign=covid&utm_content=0327'>here</a></p>
        <Collapsible className='outerCollapsible' title='JHU & Out-of-state Counseling Resources' content={<>
            <p>Phone: 410-516-8278</p>
            <p>This number leads to the JHU Counseling Center. JHU therapists and counselors’ licenses do not allow them to help students outside of Maryland. However, they can direct you to resources in your state that can assist you.</p>
        </>
        } />
        <Collapsible className='outerCollapsible' title='Important Numbers to Know' content={<>
            <p style={{ marginBottom: '0px' }}>These are some important numbers to call for different situations.</p>
            <Collapsible title='Crisis Text Line' content={
                <>
                    <p>This is a completely anonymous crisis text line, which allows students (and all residents in the above countries) to reach out if facing mental health issues and are unable to reach the counselling centre.</p>
                    <p>Crisis Text Line for students in the US, Canada, and the UK: <a href='https://www.crisistextline.org/' > here</a></p>
                </>
            } />
            <Collapsible title='National Suicide Prevention Lifeline' content={<>
                <p>Toll-free helpline at 1800-273-8255</p>
                <p>Completely free and available 24/7.</p>
            </>
            } />
            <Collapsible title='SARU (Sexual Assault Resource Unit )' content={<>
                <p>Phone: (410)-516-7887</p>
                <p>SARU can also be reached through social media (<a href='https://www.instagram.com/jhusaru/'>Instagram</a>, <a href='https://www.facebook.com/SARUatHopkins'>Facebook</a>, or by jhusaru@gmail.com.</p>
            </>} />
            <Collapsible title='Trans Lifeline' content={<p>Phone: 877-565-8860 | Website: <a href='https://www.translifeline.org/hotline'>here</a></p>} />
        </>} />
        <Collapsible className='outerCollapsible' title='Spiritual Help' content={<><p>The Hopkins University Chaplain.</p><p>Email kschnurr@jhu.edu to schedule Zoom appointments</p></>} />
        <Collapsible className='outerCollapsible' title='Online Mental Health Workshops' content={<>
            <p>Online Mental Health Workshops offered by the JHU Counseling Center</p>
            <Collapsible title='Mindful Living' content={<><p>Mondays 12-1:30pm starting April 6</p><p>Fridays 3:30-5pm starting April 10</p></>} />
            <Collapsible title='Stress Management Skills' content={<><p>Wednesdays 3-4pm starting April 8</p><p>Fridays 1-2pm starting April 3</p></>} />
            <Collapsible title='Wellness Workshops' content={<><p>Tuesdays 3:30-4:30pm starting April 7</p><p>Fridays 1-2pm starting April 10</p></>} />
        </>} />
        <Collapsible className='outerCollapsible' title='Emotional Support apps/tips' content={<>
            <Collapsible title='Silver Cloud' content={<>
                <p>Self-participate platform that is confidential, not anonymous. Uses the Cognitive Behavioral Therapy model (CBT) which “hypothesizes that people's emotions and behaviours are influenced by their perceptions of events”. </p>
                <p>Offers self-help or a coach who can guide you through the modules and offer personalized tips and suggestions.</p>
                <p>If you say something seriously worrisome, they have an in-network system to reach out to you and get actual help.</p>
                <p>Sign up <a href='https://jhu.silvercloudhealth.com/signup/'>here</a></p>
            </>
            } />
            <Collapsible title='myStrength app' content={<>
                <p>Mental health support app that helps manage depression, anxiety, mood, sleep, and more.</p>
                <p>JHU students get <b>free</b> access to it with the code: <b>JHU</b> or <b>JHHS</b></p>
                <p>Sign up <a href='https://mystrength.com/mobile'>here</a></p>
            </>} />
            <Collapsible title='Calm App' content={<>
                <p>App to help with mindfulness, sleep and guided meditation exercises</p>
                <p>Free if you sign up with a JHU email address</p>
                <p>Sign up <a href='http://www.calm.edu/jhu'>here</a></p>
            </>} />
            <Collapsible title='JHU Counseling Center Instagram' content={<p>Updates often with tips on dealing with stress and being in self-quarantine <a href='https://www.instagram.com/jhucounselingcenter/?igshid=lg7xli2w869d'>here</a></p>} />
            <Collapsible title='Insight Timer' content={<><p>Free guided Meditations.</p><p>Sign up <a href='https://insighttimer.com/'>here</a></p></>} />
        </>
        } />
        <Collapsible className='outerCollapsible' title='Online Fitness Courses from the JHU Rec Center' content={<>
            <p>Rec Center is offering online classes through Zoon through their app.</p>
            <p>Download from the App Store <a href='https://appsto.re/us/sVdokb.i'>here</a></p>
            <p>Download from the Google Play Store <a href='https://play.google.com/store/apps/details?id=com.FitDegree.JohnsHopkinsUniversity&hl=en'>here</a></p>
        </>} />
    </>
    );
}

export default MentalEmotionalHelp;