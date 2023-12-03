import { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import GoogleMap from "../../components/google-map";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  let { pathname } = useLocation();
  const [contact, setContact] = useState(initialState);
  const { name, email, subject, message } = contact;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const sendMessage = (e) => {
    e.preventDefault();

    //Validations
    if (!name || !email || !subject || !message) {
      toast.error("Please Fill All the Feilds");
      return;
    }

    console.log(contact);
    setContact(initialState);
    toast.success("Message Sent");
  };

  return (
    <Fragment>
      <SEO titleTemplate="Contact" description="Contact page of EliteMart." />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            { label: "Contact", path: process.env.PUBLIC_URL + pathname },
          ]}
        />
        <div className="contact-area pt-100 pb-100">
          <div className="container">
            <div className="contact-map mb-10">
              <GoogleMap lat={47.444} lng={-122.176} />
            </div>
            <div className="custom-row-2">
              <div className="col-12 col-lg-4 col-md-5">
                <div className="contact-info-wrap">
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="contact-info-dec">
                      <p>+923022304253</p>
                      <p>+923111352377</p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-globe" />
                    </div>
                    <div className="contact-info-dec">
                      <p>
                        <a href="mailto:yourname@email.com">temp@gmail.com</a>
                      </p>
                      <p>
                        <a href="https://yourwebsitename.com">Websites Link</a>
                      </p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-map-marker" />
                    </div>
                    <div className="contact-info-dec">
                      <p>Address goes here, </p>
                      <p>street, Crossroad 123.</p>
                    </div>
                  </div>
                  <div className="contact-social text-center">
                    <h3>Follow Us</h3>
                    <ul>
                      <li>
                        <a href="//facebook.com">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="//pinterest.com">
                          <i className="fa fa-pinterest-p" />
                        </a>
                      </li>
                      <li>
                        <a href="//thumblr.com">
                          <i className="fa fa-tumblr" />
                        </a>
                      </li>
                      <li>
                        <a href="//vimeo.com">
                          <i className="fa fa-vimeo" />
                        </a>
                      </li>
                      <li>
                        <a href="//twitter.com">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-8 col-md-7">
                <div className="contact-form">
                  <div className="contact-title mb-30">
                    <h2>Get In Touch</h2>
                  </div>
                  <form className="contact-form-style" onSubmit={sendMessage}>
                    <div className="row">
                      <div className="col-lg-6">
                        <input name="name" placeholder="Name*" value={name} onChange={handleInputChange} type="text" />
                      </div>
                      <div className="col-lg-6">
                        <input
                          name="email"
                          placeholder="Email*"
                          value={email}
                          onChange={handleInputChange}
                          type="email"
                        />
                      </div>
                      <div className="col-lg-12">
                        <input
                          name="subject"
                          placeholder="Subject*"
                          value={subject}
                          onChange={handleInputChange}
                          type="text"
                        />
                      </div>
                      <div className="col-lg-12">
                        <textarea
                          name="message"
                          placeholder="Your Message*"
                          value={message}
                          onChange={handleInputChange}
                        />
                        <button className="submit" type="submit">
                          SEND
                        </button>
                      </div>
                    </div>
                  </form>
                  <p className="form-message" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Contact;
