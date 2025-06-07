import React from "react";
import { Link } from "react-router-dom";
import "./Beranda.css";

const daftarArtikel = [
  {
    id: "1",
    judul: "Pengenalan React Router",
    ringkasan: "Pelajari dasar-dasar React Router...",
    isi: "React Router adalah pustaka populer di ekosistem React yang digunakan untuk mengelola navigasi dan routing antar halaman dalam aplikasi berbasis React. Dengan React Router, pengembang dapat membuat aplikasi single-page yang dapat berpindah antar tampilan atau komponen secara mulus tanpa perlu memuat ulang halaman. Library ini menyediakan berbagai fitur seperti routing dinamis, nested routes, dan manajemen history, sehingga memudahkan pembuatan aplikasi yang responsif dan user-friendly. Penggunaan React Router meningkatkan pengalaman pengguna dengan memungkinkan navigasi yang cepat dan efisien di dalam aplikasi web.",
  },
  {
    id: "2",
    judul: "Manajemen State dengan Hooks",
    ringkasan: "Cara menggunakan useState dan useEffect...",
    isi: "React Hooks seperti useState dan useEffect membantu mengelola state.",
  },
  {
    id: "3",
    judul: "Styling di React",
    ringkasan: "Berbagai pendekatan untuk styling komponen React...",
    isi: "Anda bisa menggunakan CSS biasa, CSS Modules, atau styled-components.",
  },
];

const Beranda = () => {
  return (
    <div className="container d-flex flex-column justify-content-start align-items-center vh-100 w-100">
      <h2 className="text-white fw-bold text-center">Daftar Artikel</h2>
      {daftarArtikel.map((artikel) => (
        <div
          key={artikel.id}
          className="artikel-card p-4 mb-4 rounded-2 text-white"
        >
          <h3 className="artikel-judul">
            <Link
              to={`/artikel/${artikel.id}`}
              className="text-decoration-none fw-semibold artikel-link-custom"
            >
              {artikel.judul}
            </Link>
          </h3>
          <p className="artikel-ringkasan fw-normal mt-2">
            {artikel.ringkasan}
          </p>
        </div>
      ))}
    </div>
  );
};

export { daftarArtikel };
export default Beranda;
