import React from 'react';
import Collapsible from '../Collapsible';

const CollegeHelpPage = () => {
    return <>
        <h2>College Help/Academic Assistance</h2>
        <Collapsible className='outerCollapsible' title='Avoid eye strain!' content={<>
            <p>20-20-20 rule and other tips: Every 20 minutes, take a 20 second break to look at something at least 20 feet away. Read more about it <a href='https://www.insightvisioncenter.com/protect-eyes-harmful-digital-devices/'>here</a>.</p>
            <p>Important as all our lessons are now online :)</p>
        </>} />
        <Collapsible className='outerCollapsible' title='Academic Support' content={<>
            <Collapsible title='Study Consulting' content={<>
                <p>Consultant meets with the mentee once a week and talks about the past week. Then the consultant will offer possible solutions and steps to improve. </p>
                <p>This is a resource for <b>everyone</b>. Not just for the kid on academic probation, but for the kid with a 3.9 GPA who just wants someone to keep them accountable. </p>
                <p>Usually, the consultant and mentee are in the same major and the consultant has already taken most of the mentee’s current classes. </p>
                <p>Learn more and sign up <a href='https://academicsupport.jhu.edu/study-consulting/request-a-consultant/'>here</a>.</p>
            </>} />
            <Collapsible title='Learning Den' content={<>
                <p>This is a tutoring service.</p>
                <p>Tutors are trained to be personable tutors for either a group environment or a one-on-one environment to allow students to ask the tutors questions that are subject specific. </p>
                <p>For one-on-one: tutors are on a demonstrated need basis. For students that come from special cohorts or the professor has requested support - a one on one tutor will be paired with a student that has experience with that professor’s class and will meet once or more a week to work on the subject. </p>
                <p>Tutors can provide not only subject help, but just overall help with Hopkins courseload in general.</p>
                <p>Learn more and sign up <a href='https://academicsupport.jhu.edu/learning-den/'>here</a>.</p>
            </>} />
            <Collapsible title='Writing Center' content={<>
                <p>Writing Center tutors work with students on a range of college writing assignments and at any stage of the writing process. We can help you as you clarify your essay’s focus, develop your essay’s thesis, and structure your essay’s argument, or we can offer you assistance as you integrate sources or revise a draft.</p>
                <p>They do <b>not</b> edit or proofread papers.</p>
                <p>Learn more and sign up <a href='https://krieger.jhu.edu/writingcenter/2020/03/22/remote-services/'>here</a>.</p>
            </>} />
        </>} />
        <Collapsible className='outerCollapsible' title='Inflexible Professors' content={<>
            <p>Please submit issues in <a href='https://forms.gle/sCTFrCBy7VwQfHXD9'>this</a> form.</p>
            <p>Form is monitored by the students of JHU Help. If recurring issues are found, the issues will be forwarded to SGA and administration.</p>
            <p>
                Issues can include (but not limited to):
                <li>Mandatory livestream Zoom attendance w/no recorded Panapto recordings.</li>
                <li>Strict exam times and not taking into account students in other timezones.</li>
                <li>Making exams more difficult.</li>
            </p>
            <p>Help your peers and yourself!</p>
        </>} />
    </>
}

export default CollegeHelpPage;