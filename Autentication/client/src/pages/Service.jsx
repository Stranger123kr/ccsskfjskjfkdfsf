import React from "react";
import "./Service.css";
import { useAuth } from "../store/auth";
const Service = () => {
  const { serviceInfo } = useAuth();

  return (
    <>
      <div className="services_container">
        <h2>Services</h2>
        <div className="services_cards">
          {/* ------------------------------- */}
          {serviceInfo.map((info, id) => (
            <div className="cards" key={id}>
              <div className="cards_info">
                <img
                  src="/images/design.png"
                  width="300px"
                  height="300px"
                  alt="card_img"
                />
                <div className="card_price">
                  <p>Tech Solution inc</p>
                  <span>{info.price}</span>
                </div>
                <h3>{info.service}</h3>
                <p>{info.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Service;
