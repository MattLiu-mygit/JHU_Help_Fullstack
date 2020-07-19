import React from 'react';

class ContactPage extends React.Component {
  render() {
    return (
      <>
        <div className="jumbotron" style={{ paddingBottom: '0rem' }}>
          <h2 style={{ marginBottom: '5rem' }}>Contact us!</h2>
          <p>
            Check out our Facebook page{' '}
            <a href="https://www.facebook.com/JHUHelp/?__tn__=%2Cd%2CP-R&eid=ARCzkTeb4uIJUi4nemKCHJf6vM9ByY6Z6NRKZYDBupNC2987pbYBScmveVrU-gsg3EKh_jO9a8Rr8L7G">
              here
            </a>
            .
          </p>
          <p>Email us at jhuhelp@gmail.com</p>
        </div>
      </>
    );
  }
}

export default ContactPage;
