import React from "react";

class Contact extends React.Component {


  render () {

    return (
      <section className="contact">
        <div className="contact__email">
          <form action="#" className="form">
            <div className="form__group">
                <input type="text" className="form__input" placeholder="Full name" id="name" required/>
                <label htmlFor="name" className="form__label">Full name</label>
            </div>
            <div className="form__group">
                <input type="email" className="form__input" placeholder="Email address" id="email" required/>
                <label htmlFor="email" className="form__label">Email address</label>
            </div>

            <div className="form__group">
                <button className="btn">Send Email</button>
            </div>
          </form>
        </div>
        <div className="contact__social">
        </div>
      </section>
    );
  }
}

export default Contact;
