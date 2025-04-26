import "../styles/About.css";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaUikit } from "react-icons/fa";
import { GrSwift } from "react-icons/gr";
import { FiDatabase } from "react-icons/fi";
import { SiFlutter } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { FaPhp } from "react-icons/fa6";
import { FaFigma } from "react-icons/fa";
import { BiLogoGoLang } from "react-icons/bi";
import { DiNodejs } from "react-icons/di";
import { SiPostman } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

function About() {
  return (
    <section id="about">
      <div className="wrapper">
        <h3>About</h3>
        <p>
          Saya berkomitmen untuk selalu memberikan hasil terbaik dalam setiap proyek yang saya kerjakan.
          <p>Portofolio ini menampilkan kumpulan proyek web dan aplikasi yang saya kembangkan. Setiap proyek merupakan hasil dari perpaduan kreativitas, keahlian teknis, dan analisis data yang mendalam.</p>
          Dengan pengalaman dalam berbagai teknologi dan kemampuan analitis yang kuat, saya mampu merancang dan mengembangkan website serta aplikasi yang tidak hanya fungsional tetapi juga efisien dan mudah diakses.
        </p>

        <h4>Programing Languange & Tools</h4>
        <div className="skills">
          <TiHtml5 />
          <FaCss3Alt />
          <FaReact />
          <FaJava />
          <SiJavascript />
          <FaUikit />
          <GrSwift />
          <FiDatabase />
          <SiMongodb />
          <SiFlutter />
          <FaLaravel />
          <FaPhp />
          <FaFigma />
          <BiLogoGoLang />
          <DiNodejs />
          <SiPostman />
        </div>
      </div>
    </section>
  );
}

export default About;
