import React, { useState } from "react";
import { useAuth } from "../store/auth";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const { userData } = useAuth();

  // ---------------------------------------
  const [user, setUser] = useState({
    username: userData ? userData.username : "",
    email: userData ? userData.email : "",
    message: "",
  });

  // ---------------------------------------

  const GetUserData = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // -----------------------------------------

  const SubmitRegisterData = async (e) => {
    e.preventDefault();
    try {
      const UserInfo = await axios.post(
        "http://localhost:5000/api/form/contact",
        user
      );
      toast.success(UserInfo.data.msg);
      setUser({
        username: userData ? userData.username : "",
        email: userData ? userData.email : "",
        message: "",
      });
    } catch (error) {
      if (error.response.status === 406) {
        toast.error(error.response.data);
      } else {
        toast.error(error.response.data.message.slice(24));
      }
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="images/support.png"
                  alt="register_img"
                  width="400"
                  height="450"
                />
              </div>

              {/* lets tackle register page */}

              <div className="registration-from">
                <h1 className="main-heading mb-3">Contact From</h1>
                <br />

                <form>
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="Enter Username"
                      id="username"
                      required
                      autoComplete="off"
                      value={user.username}
                      onChange={GetUserData}
                    />
                  </div>
                  {/* ----------------------------------------- */}
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Email"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={GetUserData}
                    />
                  </div>
                  {/* ----------------------------------------- */}
                  <div>
                    <label htmlFor="message">message</label>

                    <textarea
                      name="message"
                      id="message"
                      required
                      autoComplete="off"
                      value={user.message}
                      onChange={GetUserData}
                      rows="6"
                      style={{ outline: "none", padding: "0.2rem 1rem" }}
                    ></textarea>
                  </div>

                  {/* ----------------------------------------- */}

                  <br />
                  <button
                    onClick={SubmitRegisterData}
                    type="submit"
                    className="btn btn-submit"
                  >
                    Submit Now
                  </button>
                  {/* ----------------------------------------- */}
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>

      {/* ================================= */}
      {/* add address throw map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.667371850514!2d88.36076607450927!3d22.51665983501983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276d551f1dbed%3A0x757d6a2be1a378ee!2sGolpark%2C%20Hindustan%20Park%2C%20Gariahat%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1702304356673!5m2!1sen!2sin"
        width="100%"
        height="500px"
        style={{ border: "none", marginTop: "4rem" }}
        loading="lazy"
      ></iframe>
    </>
  );
};

export default Contact;
