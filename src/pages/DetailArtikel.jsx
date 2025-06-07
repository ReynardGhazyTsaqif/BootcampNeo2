import { useParams } from "react-router-dom";
import { daftarArtikel } from "./Beranda";
import "./Detail.css";

const DetailArtikel = () => {
  const { idArtikel } = useParams();
  const artikel = daftarArtikel.find((a) => a.id === idArtikel);

  if (!artikel) {
    return <p>Artikel tidak ditemukan.</p>;
  }

  return (
    <div className="detail text-white p-4 mb-4 rounded-2 container d-flex flex-column  w-100">
      <h1 className="text-white fw-bold text-center rounded-2">
        {artikel.judul}
      </h1>
      <p className="">{artikel.isi}</p>
    </div>
  );
};

export default DetailArtikel;
