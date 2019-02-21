import React from "react";
import social from './data/social';

import SocialBox from './SocialBox';

class Contact extends React.Component {


  render () {

    return (
      <section className="contact">
        <div className="email">
          <form action="#" className="form">
            <div className="form__group">
                <input type="text" className="form__input" placeholder="Subject" id="subject" required/>
                <label htmlFor="subject" className="form__label">Subject</label>
            </div>
            <div className="form__group">
                <textarea className="form__input form__input--textarea" placeholder="Email Body" id="body" required/>
                <label htmlFor="body" className="form__label">Email Body</label>
            </div>
            <div className="form__group">
                <button className="btn">Send Email</button>
            </div>
          </form>
        </div>
        <div className="social">
          {social.map((boxDetails) => (
            <SocialBox boxDetails={boxDetails} key={boxDetails.icon}/>
          ))}
        </div>
      </section>
    );
  }
}

export default Contact;
