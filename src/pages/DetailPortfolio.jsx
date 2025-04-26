import { useParams, Navigate } from "react-router-dom";
import "../styles/DetailPortfolio.css";
import { portfolioList } from "../data/DataPortfolio";
import Navbarhome from "../components/Navbarhome";
import Footer from "../components/Footer";
import ScrollTotop from "../components/ScrollTotop";
function DetailPortfolio() {
  const { id } = useParams();
  const data = portfolioList.find((item) => item.id == id);
  if ((data == undefined)) {
    return <Navigate to="/page-Not-found" />;
  }
  return (
    <>
      <Navbarhome />

      <section id="detail-portfolio">
        <div className="wrapper">
          <h1>{data.title}</h1>
          <img src={data.image} alt="" />
          <p className="skill">
            <b>Skills : {data.skill}</b>
          </p>
          <p className="Link">
            <b>Link Akses : {data.link}</b>
          </p>
        </div>
      </section>

      <Footer />
      <ScrollTotop/>
    </>
  );
}

export default DetailPortfolio;
