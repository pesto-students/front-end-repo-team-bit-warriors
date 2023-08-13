import React, { useState } from "react";
import ConnectService from "../services/ConnectService";
import "../styles/Contact.css"



const ContactUsPage = () => {
    const intialState = {
      name: "",
      email: "",
      phone: "",
      comment: "",
    }
    const [formData, setFormData] = useState(intialState);
    
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
      console.log("formData", formData)
    };
    
    
    const handleSubmit = async () => {
      // e.preventDefault();
      console.log("formData", formData)
      await ConnectService.createConnect(formData)
      await setFormData(intialState)
    }

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
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="John Doe"
            />
          </div>
          <div className="inputGroup">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="John.Doe@gmail.com"
            />
          </div>
          <div className="inputGroup">
            <label>Phone number</label>
            <input
              type="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="384593453"
            />
          </div>
          <div className="inputGroup">
            <label>Comments</label>
            <textarea
              name="comment"
              rows="3"
              value={formData.comment}
              onChange={handleInputChange}
              placeholder="I like ... most about your site"
            />
          </div>

            <div className="inputGroup">
                <button type="button"  onClick={handleSubmit}>Submit</button>
            </div>
          </form>
      </div>
    </section>
  );
};


export default ContactUsPage;