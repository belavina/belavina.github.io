import React from "react";
import * as emailjs from "emailjs-com";

// -- local imports
import social from "./data/social";
import SocialBox from "./SocialBox";
import ContactInput from "./ContactInput";

class Contact extends React.Component {
  state = {
    subject: "",
    body: "",
    btnDisabled: false
  };

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  sendEmail = event => {
    event.preventDefault();
    this.setState({ btnDisabled: true });

    emailjs
      .send(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID,
        this.state,
        process.env.EMAILJS_USER_ID
      )
      .then(
        response => {
          console.log("SUCCESS!", response.status, response.text);
        },
        error => {
          console.log("FAILED...", error);
        }
      )
      .then(() => {
        this.setState({ btnDisabled: false });
      });
  };

  render() {
    return (
      <section className="contact">
        <div className="email">
          <form action="#" className="form" onSubmit={this.sendEmail}>
            <ContactInput
              placeholder="Email Subject"
              inputId="subject"
              handleChange={this.handleChange}
            />
            <ContactInput
              inputType="textarea"
              placeholder="Email Body"
              inputId="body"
              handleChange={this.handleChange}
            />
            <div className="form__group">
              <button className="btn" disabled={this.state.btnDisabled}>
                contact
              </button>
            </div>
          </form>
        </div>
        <div className="social">
          {social.map(boxDetails => (
            <SocialBox boxDetails={boxDetails} key={boxDetails.icon} />
          ))}
        </div>
      </section>
    );
  }
}

export default Contact;
