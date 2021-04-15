import React from "react";
import "./contact.scss";
import Title from "../ui-components/title/title";
import ContactInfo from './contactInfo/contactInfo';

class Contact extends React.Component {
  render() {
    return (
      <div id="contact">
        <div className="wrapper">
          <Title title="Contact me" />
          <ContactInfo />
        </div>
      </div>
    );
  }
};

export default Contact;
