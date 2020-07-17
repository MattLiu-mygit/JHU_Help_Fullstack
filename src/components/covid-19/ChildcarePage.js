import React from 'react';
import Collapsible from '../Collapsible';

const ChildcarePage = () => {
    return (<>
        <h2>Homeschooling and ChildCare</h2>
        <Collapsible className='outerCollapsible' title='Homeschooling' content={<>
            <Collapsible title='CovEd' content={<>
                <p>One-on-one tutoring</p>
                <p>A free platform started by university students that pairs undergraduate mentors with K-12 students who have been affected by school closures. The goal of this virtual service is to provide a resource for students including tutoring, college preparation, and mentorship.</p>
                <p>Find out more and sign up <a href='https://www.coved.org/resources'>here</a>.</p>
            </>} />
            <Collapsible title='Khan Academy' content={<>
                <p>Pre-recorded classes</p>
                <p>Leader in free, high‐​quality, online learning content for kids to college students, Khan Academy offers no‐​cost YouTube instructional videos in a wide range of content areas, including all levels of mathematics, English language arts, science, history, computer science and programming, and SAT preparation. </p>
                <p><b>Content is aligned with state curriculum standards</b>, and parents can view and track their children’s progress. Khan Academy is widely used in schools across the country and can be a great resource for in‐​home learning.</p>
                <p>Start learning with them <a href='http://www.khanacademy.org/'>here</a></p>
            </>} />
            <Collapsible title='Scholastic Learn at Home' content={<>
                <p>Free lessons for kids Pre-K-9</p>
                <p>Start learning with them <a href='https://classroommagazines.scholastic.com/support/learnathome.html'>here</a>.</p>
            </>} />
            <Collapsible title='No Red Ink' content={<>
                <p>Free, online writing and grammar resource for learners of all ages to practice and refine their writing skills. </p>
                <p><b>Sign up as a teacher</b> (you can use your home as a school), <b>create a learner profile for your child</b>, and then <b>allow your child to log in to the student account</b> and get practicing.</p>
                <p>Sign up <a href='https://www.noredink.com/'>here</a>.</p>
            </>} />
            <Collapsible title='CodeAcademy' content={<>
                <p>Learn in‐​demand skills like coding in different programming languages, web development, design, and data science. </p>
                <p>Codecademy offers free access to basic lessons, with the option to pay for more advanced courses if your kids get really into it.</p>
                <p>Sign up <a href='https://www.codecademy.com/'>here</a>.</p>
            </>} /></>} />
        <Collapsible className='outerCollapsible' title='Childcare' content={<>
            <Collapsible className='outerCollapsible' title='Baltimore Area Babysitters/Daycare' content={<>
                <p>Informal network of JHU affiliates and Baltimore locals helping each other out in this time of need.</p>
                <p>Look under childcare/petcare tab.</p>
                <p>Learn more <a href='https://docs.google.com/spreadsheets/d/1ReeJZuaIu1WYKZjCPH0pGC44Ot63P6fNjkZR1yuKt64/edit?usp=sharing'>here</a>.</p>
            </>} />
            <Collapsible className='outerCollapsible' title='Free Delivered Baby Formula' content={<>
                <p>Phone: 718-405-9111</p>
                <p><b>New York only.</b></p>
            </>} />
        </>} />
    </>);
}

export default ChildcarePage;