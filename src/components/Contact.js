import React, { useState } from "react";
import * as emailjs from "emailjs-com";

// -- local imports
import social from "./data/social";
import SocialBox from "./SocialBox";
import ContactInput from "./ContactInput";

function Contact() {
  const defaultBtnState = {
    style: "",
    text: "contact",
    disabled: false
  };

  const successBtnState = { style: "btn--success", text: "success ✓" };
  const errBtnState = { style: "btn--error", text: "error ✗" };

  // form inputs
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [formBtn, setFormBtn] = useState(defaultBtnState);

  function sendEmail(event) {
    event.preventDefault();
    setFormBtn(prevState => ({ ...prevState, disabled: true }));

    emailjs
      .send(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID,
        { subject: subject, body: body },
        process.env.EMAILJS_USER_ID
      )
      .then(
        // success
        () =>
          setFormBtn(prevState => ({
            ...prevState,
            ...successBtnState
          })),
        // error
        () =>
          setFormBtn(prevState => ({
            ...prevState,
            errBtnState
          }))
      )
      .then(() => {
        setTimeout(() => {
          setFormBtn(defaultBtnState);
        }, 3000);
      });
  }

  return (
    <section className="contact">
      <div className="contact__email">
        <form action="#" className="form" onSubmit={sendEmail}>
          <ContactInput
            placeholder="Email Subject"
            inputId="subject"
            handleChange={e => setSubject(e.target.value)}
            value={subject}
          />
          <ContactInput
            inputType="textarea"
            placeholder="Email Body"
            inputId="body"
            handleChange={e => setBody(e.target.value)}
            value={body}
          />
          <div className="form__group">
            <button
              className={`btn ${formBtn.style}`}
              disabled={formBtn.disabled}
            >
              {formBtn.text}
            </button>
          </div>
        </form>
      </div>
      <div className="contact__social">
        {social.map(boxDetails => (
          <SocialBox boxDetails={boxDetails} key={boxDetails.icon} />
        ))}
      </div>
    </section>
  );
}

export default Contact;
