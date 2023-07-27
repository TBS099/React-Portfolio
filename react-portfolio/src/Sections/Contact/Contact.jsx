import React from "react";
import "./Contact.css";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { socialprofils } from "../../content_option";
import { Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      contactResponse: null,
      contactError: null,
      contactIntersecting: false,
      disable: true,
    };

    this.sendEmail = this.sendEmail.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.getIcon = this.getIcon.bind(this);

    this.contactSectionRef = React.createRef();

    this.handleIntersection = this.handleIntersection.bind(this);
  }

  componentDidMount() {
    //Intersection Observer for contact section
    const observer = new IntersectionObserver(([entry]) => {
      this.setState({ contactIntersecting: entry.isIntersecting });

      if (entry.isIntersecting) {
        this.contactSectionRef.current.classList.add("slide-in");
      } else {
        this.contactSectionRef.current.classList.remove("slide-in");
      }
    });
    observer.observe(this.contactSectionRef.current);
    this.intersectionObserver = observer;
  }

  componentWillUnmount() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }

  handleIntersection([entry]) {
    this.setState({ contactIntersecting: entry.isIntersecting });
  }

  handleButtonDisable() {
    if (
      this.state.email !== "" &&
      this.state.message !== "" &&
      this.state.name !== ""
    ) {
      this.setState({ disable: false });
    } else {
      this.setState({ disable: true });
    }
  }

  sendEmail(e) {
    e.preventDefault();
    if (
      this.state.name !== "" &&
      this.state.email !== "" &&
      this.state.message !== ""
    ) {
      const formData = {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
      };
      emailjs
        .send(
          "service_portfolio",
          "template_portfolio",
          formData,
          "your_private_key"
        )
        .then((response) => {
          console.log("Email sent successfully:", response);
          this.setState({
            contactResponse: "Your message has been sent successfully!",
            contactError: null,
          });
        })
        .catch((error) => {
          console.error("Email error:", error);
          this.setState({
            contactResponse: null,
            contactError:
              "Oops! There was an error sending your message. Please try again later.",
          });
        });
    } else {
      this.setState({
        contactResponse: null,
        contactError: "Please fill in all the input fields",
      });
    }
  }

  handleFormChange(e) {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        this.handleButtonDisable();
      }
    );
  }

  getIcon(iconName) {
    switch (iconName) {
      case "FaGithub":
        return <FaGithub size={32} />;
      case "FaInstagram":
        return <FaInstagram size={32} />;
      case "FaLinkedin":
        return <FaLinkedin size={32} />;
      // Add more cases for other icons
      // Example:
      // case 'FaTwitter':
      //   return <FaTwitter size={32} />;
      // case 'FaFacebook':
      //   return <FaFacebook size={32} />;
      // ...
      default:
        return null;
    }
  }

  render() {
    return (
      <section id="contact" className="contact" ref={this.contactSectionRef}>
        <div className="contact-section">
          <div className="contact-heading">
            <h1 className="contact-title">Contact Me</h1>
            <hr />
          </div>
          <div className="contact-content">
            <div className="contact-details">
              <div className="contact-details-box">
                <div className="phone container">
                  <h3>Phone Number:</h3>
                  <p>(+977) 9823444870</p>
                </div>
                <div className="socials container">
                  <h3>Social Media:</h3>
                  <div className="social-icons">
                    {socialprofils.map((data, i) => {
                      return (
                        <a
                          href={data.link}
                          target="_blank"
                          className="social-links"
                          rel="noopener noreferrer"
                          key={i}
                        >
                          {this.getIcon(data.icon)}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <Form onSubmit={this.sendEmail}>
                <div className="form-input-group">
                  <label className="form-label">Name:</label>
                  <input
                    type="text"
                    name="name"
                    className="form-input"
                    placeholder="Enter your name"
                    value={this.state.name}
                    onChange={this.handleFormChange}
                  />
                </div>

                <div className="form-input-group">
                  <label className="form-label">Email Address:</label>
                  <input
                    type="email"
                    className="form-input"
                    name="email"
                    placeholder="Enter your email"
                    value={this.state.email}
                    onChange={this.handleFormChange}
                  />
                </div>
                <div className="form-input-group">
                  <label className="form-label">Message:</label>
                  <textarea
                    name="message"
                    className="form-textarea"
                    placeholder="Enter your message"
                    value={this.state.message}
                    onChange={this.handleFormChange}
                  />
                </div>
                <Button
                  className="contact-btn"
                  type="submit"
                  disabled={this.state.disable}
                >
                  Contact
                </Button>
              </Form>
            </div>
          </div>
          <div className="form-response">
            {this.state.contactResponse && (
              <div className="contact-response success">
                {this.state.contactResponse}
              </div>
            )}

            {this.state.contactError && (
              <div className="contact-response error">
                {this.state.contactError}
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
}
export default Contact;
