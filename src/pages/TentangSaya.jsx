import React from "react";
import sayaimage from "../assets/saya.png";
import "./tentang.css";

const TentangSaya = () => {
  return (
    <div className="container" id="home">
      <div className="row home">
        <div className="col-sm-7 ps-5 d-flex flex-column justify-content-center min-vh-100">
          <h1>
            Hi, it's <span style={{ color: "#000080" }}>Reynard</span>
          </h1>
          <h3>
            I'm a <span style={{ color: "#000080" }}>Web Developer</span>
          </h3>
          <p>
            Welcome to my website! I am a web developer focused on <br />
            creating extraordinary digital experiences through responsive <br />
            and interactive web design and development.
          </p>
        </div>
        <div className="col-sm-5 pt-5 ps-5 mt-4">
          <img
            src={sayaimage}
            alt="profile"
            className="rounded-circle"
            style={{ maxWidth: "32vw", minWidth: "300px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default TentangSaya;
