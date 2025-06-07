import React from "react";
import { Routes, Route } from "react-router-dom";

import Beranda from "./pages/Beranda";
import DetailArtikel from "./pages/DetailArtikel";
import Kontak from "./pages/Kontak";
import NotFound from "./pages/NotFound";
import TentangSaya from "./pages/Tentangsaya";
import Navigasi from "./components/Navigasi";
import "./App.css";

function App() {
  return (
    <div>
      <Navigasi />
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/artikel/:idArtikel" element={<DetailArtikel />} />

        <Route path="/tentang" element={<TentangSaya />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
