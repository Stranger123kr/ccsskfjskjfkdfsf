import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import Table from "../../components/Tables/Tables";
import Spinner from "../../components/Spinner/Spinner";
import BASE_URL from "../../services/helper";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./Home.css";
const Home = () => {
  // --------------------------------------------------------

  const [userData, setUserData] = useState([]);
  const [deleteUser, setDeleteUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [sort, setSort] = useState("new");
  const [statusUpdate, setStatusUpdate] = useState("");
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  // --------------------------------------------------------

  const GetUserData = async () => {
    try {
      const UserData = await axios.get(
        `${BASE_URL}/user?fname=${search}&gender=${gender}&status=${status}&sort=${sort}&page=${page}`
      );
      setUserData(UserData.data.NewUser);
      setPageCount(UserData.data.Pagination.PageCount);

      setLoading(false);
    } catch (error) {
      toast.error(`${error.message}`);
    }
  };

  // ---------------------------------------------------------------

  const UpdateUserStatus = async (id, updateStatus) => {
    try {
      await axios.patch(`${BASE_URL}/user/status/${id}`, {
        status: updateStatus,
      });
      setStatusUpdate(updateStatus);
      toast.success(`Status Update Successfully`);
    } catch (error) {
      toast.error(`${error}`);
    }
  };

  // --------------------------------------------------------

  const DownloadFile = async () => {
    try {
      const UserData = await axios.get(`${BASE_URL}/user/export`);
      window.location.href = UserData.data.downloadUrl;
    } catch (error) {
      toast.error(`${error.message}`);
    }
  };
  // --------------------------------------------------------

  // pagination

  const PreviousBtn = () => {
    setPage(() => {
      if (page === 1) return page;
      return page - 1;
    });
  };

  // --------------------------------------------------------
  // pagination
  const NextBtn = () => {
    setPage(() => {
      if (page === pageCount) return page;
      return page + 1;
    });
  };

  // --------------------------------------------------------

  useEffect(() => {
    GetUserData();
  }, [deleteUser, search, gender, status, sort, statusUpdate, page]);

  return (
    <>
      <div className="container">
        <div className="main_div">
          {/* searchbar  and btn*/}
          <div className="search_add mt-4 d-flex justify-content-between">
            <div className="search col-lg-4">
              <Form>
                <Row>
                  <Col xs="auto">
                    <Form.Control
                      type="text"
                      placeholder="Search"
                      className=" mr-sm-2"
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </Col>
                  <Col xs="auto">
                    <Button type="submit" variant="dark">
                      Submit
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
            <div className="add_btn">
              <Link to="/register">
                <Button type="submit">
                  <i className="fa-solid fa-plus"></i> Add User
                </Button>
              </Link>
            </div>
          </div>

          {/* export , gender , status ,  */}

          <div className="filter_div mt-5 d-flex justify-content-between flex-wrap">
            <div className="export_cvs">
              <Button
                type="submit"
                className="export_btn"
                onClick={DownloadFile}
              >
                Export Cvs
              </Button>
            </div>

            {/* filter by gender */}

            <div className="filter_gender">
              <div className="filter">
                <h3>Filter By Gender</h3>
                <div className="gender d-flex justify-content-between">
                  <Form.Check
                    type="radio"
                    label="All"
                    name="gender"
                    value="All"
                    defaultChecked
                    onClick={() => setGender("")}
                  />

                  <Form.Check
                    type="radio"
                    label="male"
                    name="gender"
                    value="M"
                    onClick={(e) => setGender(e.target.value)}
                  />

                  <Form.Check
                    type="radio"
                    label="female"
                    name="gender"
                    value="F"
                    onClick={(e) => setGender(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* sort by value */}

            <div className="filter_new">
              <h3>Sort By Value</h3>
              <Dropdown className="text-center">
                <Dropdown.Toggle
                  className="dropdown_btn"
                  id="dropdown-basic"
                ></Dropdown.Toggle>

                {/* -------------------------------- */}

                <Dropdown.Menu className="my-2">
                  <Dropdown.Item onClick={() => setSort("new")}>
                    New
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setSort("old")}>
                    Old
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            {/* filter by  status */}

            <div className="filter_status">
              <div className="status">
                <h3>Filter By Status</h3>
                <div className="status_radio d-flex justify-content-between flex-wrap gap-3">
                  <Form.Check
                    type="radio"
                    label="All"
                    name="status"
                    value="All"
                    defaultChecked
                    onClick={() => setStatus("")}
                  />

                  <Form.Check
                    type="radio"
                    label="Active"
                    name="status"
                    value="Active"
                    onClick={(e) => setStatus(e.target.value)}
                  />

                  <Form.Check
                    type="radio"
                    label="Inactive"
                    name="status"
                    value="Inactive"
                    onClick={(e) => setStatus(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <Table
            userData={userData}
            setDeleteUser={setDeleteUser}
            UpdateUserStatus={UpdateUserStatus}
            page={page}
            pageCount={pageCount}
            setPage={setPage}
            PreviousBtn={PreviousBtn}
            NextBtn={NextBtn}
          />
        )}
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        pauseOnHover={false}
        theme="colored"
      />
    </>
  );
};

export default Home;
