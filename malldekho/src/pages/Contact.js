import React from "react";
import "../styles/Contact.css"

const ContactUsPage = () => {
  return (
    <section className="contactUs">
      <div className="contactusContainer">
          <div className="contactTitle">
            <h1>We want to hear from you</h1>
            <p>We are always looking for ways to improve our site and services. 
                If you have any feedback, suggestions, or questions, please don't hesitate to contact us. We appreciate your input and will do our best to respond to you as soon as possible.

You can contact us by filling out the form below or by emailing us at contact.malldekho@gmail.com</p>
          </div>
          <form className="col-lg-6">
            <div className="inputGroup">
                <label>Name</label>
                <input type="text" placeholder="John Doe"/>
            </div>
            <div className="inputGroup">
                <label>Email address</label>
                <input type="text" placeholder="John.Doe@gmail.com"/>
            </div>
            <div className="inputGroup">
                <label>Phone number</label>
                <input type="text" placeholder="384593453"/>
            </div>
            <div className="inputGroup">
                <label>Comments</label>
                <textarea type="textarea" rows="3" placeholder="I like ... most about your site"/>
            </div>
            <div className="inputGroup">
                <button>Submit</button>
            </div>
          </form>
      </div>
    </section>
  );
};


export default ContactUsPage;