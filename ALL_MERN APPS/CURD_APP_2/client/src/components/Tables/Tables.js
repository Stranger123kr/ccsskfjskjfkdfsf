import React from "react";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import BASE_URL from "../../services/helper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "./Tables.css";
import Pagination from "../../components/Pagination/Paginations";
const Tables = ({
  userData,
  setDeleteUser,
  UpdateUserStatus,
  NextBtn,
  PreviousBtn,
  page,
  setPage,
  pageCount,
}) => {
  // ---------------------------------------------------------------

  const DeleteUser = async (id) => {
    try {
      const res = await axios.delete(`${BASE_URL}/user/delete/${id}`);
      setDeleteUser(res);
      toast.success(`${res.data.fname} ${res.data.lname} Deleted successfully`);
    } catch (error) {
      toast.error(`${error}`);
    }
  };

  return (
    <>
      <div className="container">
        <Row>
          <div className="col mt-4">
            <Card className="shadow">
              <Table className="align-items-center" responsive="sm">
                <thead className="thead-dark">
                  <tr className="table-dark">
                    <th>Id</th>
                    <th>FullName</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Status</th>
                    <th>Profile</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {userData.length > 0 ? (
                  userData.map((user, index) => (
                    <tbody key={user._id}>
                      <tr>
                        <td>{index + 1 + (page - 1) * 4}</td>
                        <td>
                          {user.fname} {user.lname}
                        </td>
                        <td>{user.email}</td>
                        <td>{user.gender}</td>
                        <td className="d-flex align-items-center">
                          <Dropdown>
                            <Dropdown.Toggle
                              variant={
                                user.status === "Active" ? "primary" : "danger"
                              }
                              id="dropdown-basic"
                            >
                              {user.status}
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="my-2">
                              <Dropdown.Item
                                onClick={() =>
                                  UpdateUserStatus(user._id, "Active")
                                }
                              >
                                Active
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  UpdateUserStatus(user._id, "Inactive")
                                }
                              >
                                Inactive
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </td>
                        <td>
                          <img
                            src={
                              user.profile
                                ? `${BASE_URL}/user/uploads/${user.profile}`
                                : ` https://cdn-icons-png.flaticon.com/512/3135/3135715.png`
                            }
                            alt="Profile_img"
                            className="profile_img"
                          />
                        </td>
                        <td>
                          <Dropdown>
                            <Dropdown.Toggle
                              className="action"
                              id="dropdown-basic"
                            ></Dropdown.Toggle>
                            <Dropdown.Menu className="my-2">
                              <Dropdown.Item>
                                <Link
                                  to={`/profile/${user._id}`}
                                  className="link_1"
                                >
                                  <i
                                    className="fa-solid fa-eye"
                                    style={{ color: "green" }}
                                  ></i>
                                  <span> View</span>
                                </Link>
                              </Dropdown.Item>
                              <Dropdown.Item>
                                <Link
                                  to={`/edit/${user._id}`}
                                  className="link_1"
                                >
                                  <i
                                    className="fa-solid fa-pen-to-square"
                                    style={{ color: "blue" }}
                                  ></i>
                                  <span> Edit</span>
                                </Link>
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => DeleteUser(user._id)}
                              >
                                <i
                                  className="fa-solid fa-trash"
                                  style={{ color: "red" }}
                                ></i>
                                <span> Delete</span>
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </td>
                      </tr>
                    </tbody>
                  ))
                ) : (
                  <div className="data">
                    <h1>There is no data present</h1>
                  </div>
                )}
              </Table>
              <Pagination
                page={page}
                pageCount={pageCount}
                PreviousBtn={PreviousBtn}
                NextBtn={NextBtn}
                setPage={setPage}
              />
            </Card>
          </div>
        </Row>
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

export default Tables;
