import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Register.css";
import axios from "axios";
import BASE_URL from "../../services/helper";
import { useNavigate } from "react-router-dom";

const Register = () => {
  // ---------------------------------------------------

  const navigate = useNavigate();

  // ---------------------------------------------------

  const [inputData, setInputData] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    gender: "",
    location: "",
  });

  const [status, setStatus] = useState("Active");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");

  // ---------------------------------------------------

  const options = [
    { value: "Active", label: "Active" },
    { value: "InActive", label: "InActive" },
  ];

  // ---------------------------------------------------

  // set input value

  const setInputValue = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  // ---------------------------------------------------

  // set  status  value

  const setStatusValue = (e) => {
    const { value } = e;
    setStatus(value);
  };

  // ---------------------------------------------------

  // set image  value

  const setImageValue = (e) => {
    const { files } = e.target;
    setImage(files[0]);
  };

  // ---------------------------------------------------

  // submit form Data

  const SubmitUserData = async (e) => {
    e.preventDefault();
    const { fname, lname, email, mobile, gender, location } = inputData;

    if (fname === "") {
      toast.error("Fname is Required");
    } else if (lname === "") {
      toast.error("Lname is Required");
    } else if (email === "") {
      toast.error("Email is Required");
    } else if (!email.includes("@")) {
      toast.error("Enter Valid Email");
    } else if (mobile === "") {
      toast.error("Mobile is Required");
    } else if (mobile.length > 10) {
      toast.error("Enter Valid Mobile Number");
    } else if (mobile.length < 10) {
      toast.error("Enter Valid Mobile Number");
    } else if (gender === "") {
      toast.error("Gender is Required");
    } else if (location === "") {
      toast.error("Location is Required");
    } else {
      const data = new FormData();
      data.append("fname", fname);
      data.append("lname", lname);
      data.append("email", email);
      data.append("mobile", mobile);
      data.append("gender", gender);
      data.append("status", status);
      data.append("profile", image);
      data.append("location", location);

      // ---------------------------------------------------------------

      try {
        await axios.post(`${BASE_URL}/user/register`, data);
        navigate("/");
      } catch (error) {
        if (error.response.status === 401) {
          toast.error(`${error.response.data.message}`);
        } else if (error.response.status === 409) {
          toast.error(`${error.response.data.message}`);
        } else {
          toast.error(`${error.message}`);
        }
      }
    }
  };

  // ---------------------------------------------------

  useEffect(() => {
    if (image) {
      setPreview(URL.createObjectURL(image));
    }
  }, [image]);

  // ---------------------------------------------------

  return (
    <>
      <div className="container">
        <h2 className="text-center mt-1">Register your Profile</h2>
        <Card className="shadow mt-4 p-4">
          <div className="profile_div text-center">
            <img
              src={
                preview
                  ? preview
                  : ` https://cdn-icons-png.flaticon.com/512/3135/3135715.png`
              }
              alt="profile_img"
              className="rainbow-border"
            />
          </div>

          {/* ---------------------------------------- */}

          <Form>
            <Row>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="fname"
                  value={inputData.fname}
                  onChange={setInputValue}
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lname"
                  value={inputData.lname}
                  onChange={setInputValue}
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={inputData.email}
                  onChange={setInputValue}
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                  type="number"
                  name="mobile"
                  value={inputData.mobile}
                  onChange={setInputValue}
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Select Your Gender</Form.Label>
                <Form.Check
                  type="radio"
                  label="Male"
                  name="gender"
                  value="M"
                  onChange={setInputValue}
                />
                <Form.Check
                  type="radio"
                  label="Female"
                  name="gender"
                  value="F"
                  onChange={setInputValue}
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Select Your Status</Form.Label>
                <Select options={options} onChange={setStatusValue} />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Select Your Profile</Form.Label>
                <Form.Control
                  type="file"
                  name="profile"
                  onChange={setImageValue}
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Enter Your Location</Form.Label>
                <Form.Control
                  type="text"
                  name="location"
                  value={inputData.location}
                  onChange={setInputValue}
                />
              </Form.Group>

              <Button
                className="my-3"
                variant="primary"
                type="submit"
                onClick={SubmitUserData}
              >
                Submit
              </Button>
            </Row>
          </Form>
        </Card>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          pauseOnHover={false}
          theme="colored"
        />
      </div>
    </>
  );
};

export default Register;
