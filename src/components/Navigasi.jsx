import React from "react";
import { Link } from "react-router-dom";
import "./Navigasi.css";

function Navigasi() {
  return (
    <nav className="navbar navbar-expand-sm p-2">
      <Link className="nama px-3" to="/">
        Reynard <span>Ghazy Tsaqif</span>
      </Link>

      <ul class="navbar-nav ms-auto px-3">
        <li className="nav-item pe-2">
          <Link className="nav-link" to="/">
            Beranda
          </Link>
        </li>

        <li className="nav-item pe-2">
          <Link className="nav-link" to="/tentang">
            Tentang
          </Link>
        </li>
        <li className="nav-item pe-2">
          <Link className="nav-link" to="/kontak">
            Kontak
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigasi;
