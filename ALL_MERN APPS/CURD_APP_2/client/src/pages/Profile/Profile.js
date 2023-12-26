import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Spinner from "../../components/Spinner/Spinner";
import { useParams } from "react-router-dom";
import BASE_URL from "../../services/helper";
import axios from "axios";
import "./Profile.css";
const Profile = () => {
  const { id } = useParams("");

  // --------------------------------------------------------
  const [user, setUser] = useState([]);

  const [loading, setLoading] = useState(true);

  // --------------------------------------------------------

  const FetchUser = async () => {
    try {
      const User = await axios.get(`${BASE_URL}/user/profile/${id}`);
      setUser(User.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // const [preview, setPreview] = useState(
  //   `${BASE_URL}/user/profile/upload/${user.profile}`
  // );

  // --------------------------------------------------------

  useEffect(() => {
    FetchUser();
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="container">
          <Card className="card-profile  col-lg-6 mx-auto mt-3">
            <Card.Body>
              <Row>
                <div className="col">
                  <div className="card-profile-stats d-flex justify-content-center">
                    <img
                      src={
                        user.profile
                          ? `${BASE_URL}/user/uploads/${user.profile}`
                          : ` https://cdn-icons-png.flaticon.com/512/3135/3135715.png`
                      }
                      alt="profile_img"
                      className="rainbow-border"
                    />
                  </div>
                </div>
              </Row>
              <div className="profile_info">
                <h3 className="text-center my-1">{user.fname}</h3>
                <hr />
                <h4>
                  <i className="fa-solid fa-envelope"></i> :- {user.email}
                </h4>
                <h4>
                  <i className="fa-solid fa-mobile"></i> :- {user.mobile}
                </h4>
                <h4>
                  <i className="fa-solid fa-person-half-dress"></i> :-{" "}
                  {user.gender}
                </h4>
                <h4>
                  <i className="fa-solid fa-location-crosshairs"></i> :-{" "}
                  {user.location}
                </h4>
                <h4>
                  <i className="fa-solid fa-battery-three-quarters"></i> Status
                  :- {user.status}
                </h4>
                <h4>
                  <i className="fa-regular fa-calendar-days"></i> Date Created
                  :- {user.CreateDate}
                </h4>
                <h4>
                  <i className="fa-regular fa-calendar-days"></i> Date Updated
                  :-{" "}
                  {user.UpdateDate
                    ? user.UpdateDate
                    : "This Profile Not Updated"}
                </h4>
              </div>
            </Card.Body>
          </Card>
        </div>
      )}
    </>
  );
};

export default Profile;
