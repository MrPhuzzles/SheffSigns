import React from "react";

const Contact = () => {
  return (
  <div class="container">
      <div id="ContactHead" class="d-flex p-2 bd-highlight justify-content-center">
        <h1>Here's how you can get in touch with us:</h1>
      </div>
      <div id="InquireMethods" class="d-flex bd-highlight">
        <div class="p-2 flex-even bd-highlight">
          <h2>Give us a call!</h2>
          <h5>You can call us at <b>289-716-4208</b></h5>
          <h5>7 days a week before 6pm</h5>
        </div>
        <div class="p-2 flex-even bd-highlight">
          <h2>Send us an email!</h2>
          <h5>General inquiries can also be made via email</h5>
          <a href="mailto:sheffieldsigns@yahoo.ca" class="btn btn-secondary active" role="button">Click here to email us!</a>
        </div>
        <div class="p-2 flex-even bd-highlight">
          <h2>Visit us on Facebook!</h2>
          <h5>Check out our Facebook page and send us a message</h5>
          <a href="https://www.facebook.com/Sheffield-signs-1510717192492363/" target="_blank" class="btn btn-secondary active" role="button">Our Page!</a>
        </div>
        </div>
          <div id="FeedbackPitch" class="jumbotron jumbotron-fluid">
          <h1>Used our services before?</h1>
          <h4>Let us know how we did by leaving a review or recommending us on our Facebook page!</h4>
        </div>
  </div>
  );
};

export default Contact;
