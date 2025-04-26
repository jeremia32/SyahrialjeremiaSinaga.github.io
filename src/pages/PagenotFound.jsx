import Navbarhome from "../components/Navbarhome";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";
import "../styles/PagenotFound.css";

function PagenotFound() {
  return (
    <>
      <Navbarhome />
      <div className="error-container">
        <FaExclamationTriangle className="error-icon" />
        <h3 className="error-title">OOPS...</h3>
        <p className="error-message">Halaman yang Anda tuju tidak ditemukan.</p>
        <Link to="/" className="error-button">
          Kembali ke Beranda
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default PagenotFound;
