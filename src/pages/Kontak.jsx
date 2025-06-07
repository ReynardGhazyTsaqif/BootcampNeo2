import React from "react";
import "./kontak.css";

const Kontak = () => {
  return (
    <div className=" container-fluid text-center kontak">
      <div className="row justify-content-center align-items-center">
        <div className="sosmed mb-3">
          <a
            href="https://www.instagram.com/reynard_ghazy/profilecard/?igsh=bmQybGxvZHRqYW44"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none pe-2"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/reynard-ghazy-tsaqif-8457a7287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none pe-2"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://x.com/GhazyReynard?t=77UNUgFs9HOVo7xQreOGbA&s=09"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none pe-2"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://discord.gg/cgVtaJxv"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none pe-2"
          >
            <i className="fa-brands fa-discord"></i>
          </a>
        </div>

        <div className="col-12 text-center">
          <p style={{ color: "white" }}>
            &copy; Reynard | All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Kontak;
