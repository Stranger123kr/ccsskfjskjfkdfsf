import React from "react";
import "./Css/Contact.css";
const Contact = () => {
  return (
    <>
      <div className="contact_info_header">
        <div className="contact_container mt-2">
          <div className="contact_card">
            {/* =========================== */}
            <div className="contact_card_list email">
              <div className="contact_icon">
                <i className="zmdi zmdi-email"></i>
              </div>
              <div className="contact_info">
                <p>Email</p>
                <span>Nitesh@gmail.com</span>
              </div>
            </div>
            {/* =========================== */}
            <div className="contact_card_list phone">
              <div className="contact_icon">
                <i className="zmdi zmdi-phone-in-talk"></i>
              </div>
              <div className="contact_info">
                <p>Phone</p>
                <span>+91 8076194939</span>
              </div>
            </div>

            {/* =========================== */}
            <div className="contact_card_list address">
              <div className="contact_icon">
                <i className="zmdi zmdi-pin"></i>
              </div>
              <div className="contact_info">
                <p>Address</p>
                <span>North East Delhi</span>
              </div>
            </div>
            {/* =========================== */}
          </div>

          {/* ============================================================================ */}
          {/* message form */}

          <div className="contact-form mt-5">
            <h2>Get in Touch</h2>
            <form>
              <div className="contact_felids">
                {/* =================================== */}
                <div className="contact-form-group">
                  <label htmlFor="name"></label>
                  <input
                    type="text"
                    autoComplete="off"
                    placeholder="Your Name"
                    name="name"
                    id="name"
                    required="true"
                  />
                </div>
                {/* =================================== */}

                <div className="contact-form-group">
                  <label htmlFor="email"></label>
                  <input
                    type="email"
                    autoComplete="off"
                    placeholder="Your Email"
                    name="email"
                    id="email"
                    required="true"
                  />
                </div>
                {/* =================================== */}

                <div className="contact-form-group">
                  <label htmlFor="phone"></label>
                  <input
                    type="text"
                    autoComplete="off"
                    placeholder="Your phone"
                    name="phone"
                    id="phone"
                    required="true"
                  />
                </div>
                {/* =================================== */}
              </div>
            </form>

            <div className="contact_message my-5">
              <textarea
                name="message"
                id="message"
                cols="91"
                rows="8"
                placeholder="message"
                autoCapitalize="off"
              ></textarea>
            </div>
            {/* =================================== */}

            <div className="form-group form-button">
              <input
                type="submit"
                name="message"
                id="message"
                value="Send Message"
                className="btn btn-primary px-3"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
