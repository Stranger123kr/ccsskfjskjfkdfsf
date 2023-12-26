import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
// Create the context
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("Jwt_token"));
  const [userData, setUserData] = useState({});
  const [serviceInfo, setServicesInfo] = useState([]);

  // -----------------------------------------

  const Store_tokenLs = (token) => {
    setToken(token);
    localStorage.setItem("Jwt_token", token);
  };

  let isLoggedIn = !!token; // this is method to convert normal variable into boolean with the help of  two !!
  console.log(isLoggedIn);
  // -----------------------------------------

  const LogoutUser = () => {
    setToken("");
    localStorage.removeItem("Jwt_token");
  };

  // -----------------------------------------

  // this is a function for services

  const GetServicesInfo = async () => {
    try {
      const ServiceInfo = await axios.get("http://localhost:5000/api/service");
      setServicesInfo(ServiceInfo.data);
    } catch (error) {}
  };

  // -----------------------------------------

  // authentication process

  const DashBoardValidate = async () => {
    try {
      const token = localStorage.getItem("Jwt_token");

      const UserInfo = await axios.get(
        "http://localhost:5000/api/auth/validuser",
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setUserData(UserInfo.data.UserData);
    } catch (error) {
      console.log(error);
      console.log(error.response.data.msg);
    }
  };

  useEffect(() => {
    DashBoardValidate();
    GetServicesInfo();
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        serviceInfo,
        isLoggedIn,
        userData,
        Store_tokenLs,
        LogoutUser,
        DashBoardValidate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
