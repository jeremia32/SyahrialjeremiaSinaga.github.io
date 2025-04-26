import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaPhp } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa6";
import { RiFlutterFill } from "react-icons/ri";
import { SiKotlin } from "react-icons/si";

import { IoLogoHtml5 } from "react-icons/io";
import Navbarhome from "../components/Navbarhome";
import Footer from "../components/Footer";
import ScrollTotop from "../components/ScrollTotop";
import { FaJava } from "react-icons/fa6";
import { FaSwift } from "react-icons/fa";
import { AiOutlinePython } from "react-icons/ai";
import { DiNodejs } from "react-icons/di";
import { IoLogoReact } from "react-icons/io5";
import { FaVuejs } from "react-icons/fa";

import { GrMysql } from "react-icons/gr";
import { IoLogoTableau } from "react-icons/io5";
import { SiPostman } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";

function Experience() {
  return (
    <>
      <Navbarhome />
      <div className="wrapper">
        <h1>Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement className="vertical-timeline-element--work" date="2022 - 2023" iconStyle={{ background: "black", color: "orange" }} icon={<IoLogoHtml5 />}>
            <h3 className="vertical-timeline-element-title">Learn HTML With CSS </h3>
            <h4 className="vertical-timeline-element-subtitle">Institut Teknologi Del</h4>
            <p>Saya belajar menggunakan html dan css saat semester 1. kami membuat web sederhana menggunakan html dan css</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement className="vertical-timeline-element--work" date="2022 - 2023" iconStyle={{ background: "yellow", color: "black" }} icon={<RiJavascriptFill />}>
            <h3 className="vertical-timeline-element-title">Learn JavaScript</h3>
            <h4 className="vertical-timeline-element-subtitle">Institut Teknologi Del</h4>
            <p>saya belajar menggunakan JavaScript seperti membuat jam dan kalkulator sederhana.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement className="vertical-timeline-element--work" date="2022 - 2023" iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }} icon={<FaPhp />}>
            <h3 className="vertical-timeline-element-title">Learn PHP native</h3>
            <h4 className="vertical-timeline-element-subtitle">Institut Teknologi Dele</h4>
            <p>Saya membuat project akhir pertama saya, membuat sebuah website ecommers sederhana menggunakan php native. </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement className="vertical-timeline-element--work" date="2022 - 2023" iconStyle={{ background: "gray", color: "orange" }} icon={<FaLaravel />}>
            <h3 className="vertical-timeline-element-title">Learn PHP native</h3>
            <h4 className="vertical-timeline-element-subtitle">Institut Teknologi Dele</h4>
            <p>Saya membuat project pertama saya, membuat sebuah website ecommers sederhana sama seperti php native namun menggunakan frame work laravel. </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement className="vertical-timeline-element--work" date="2023 - 2024" iconStyle={{ background: "rgb(33, 150, 243)", color: "orange" }} icon={<FaJava />}>
            <h3 className="vertical-timeline-element-title">Learn Java</h3>
            <h4 className="vertical-timeline-element-subtitle">Institut Teknologi Dele</h4>
            <p>Saya belajar menggunakan java menggunakan ide net beans dengan membuat sebuah project sederhana </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement className="vertical-timeline-element--work" date="2023 - 2024" iconStyle={{ background: "white", color: "rgb(33, 150, 243)" }} icon={<RiFlutterFill />}>
            <h3 className="vertical-timeline-element-title">Learn flutter</h3>
            <h4 className="vertical-timeline-element-subtitle">Institut Teknologi Dele</h4>
            <p>Saya belajar menggunakan flutter menggunakan vs code dengan membuat sebuah project sederhana e-ticketing bus di kawasan danau toba sederhana </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement className="vertical-timeline-element--work" date="2023 - 2024" iconStyle={{ background: "white", color: "purple" }} icon={<SiKotlin />}>
            <h3 className="vertical-timeline-element-title">Learn Kotlin</h3>
            <h4 className="vertical-timeline-element-subtitle">Institut Teknologi Del</h4>
            <p>Saya belajar menggunakan kotlin dengan menggunakan android studio dimana saya membuat tampilan awal koffe shop Jetpack Compose, UI Modern, Activity Life Cycle, Intent</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement className="vertical-timeline-element--work" date="2023 - 2024" iconStyle={{ background: "white", color: "orange" }} icon={<FaSwift />}>
            <h3 className="vertical-timeline-element-title">Learn Swift</h3>
            <h4 className="vertical-timeline-element-subtitle">Infinite Learning Batam</h4>
            <p>Saya belajar di Apple developer Infinite Learning Membuat sebuah Game Menggunakan frame work Sprite Kit </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement className="vertical-timeline-element--work" date="2023 - 2024" iconStyle={{ background: "white", color: "blue" }} icon={<AiOutlinePython />}>
            <h3 className="vertical-timeline-element-title">Learn Python</h3>
            <h4 className="vertical-timeline-element-subtitle">Institut Teknologi Del</h4>
            <p>Saya belajar membuat sebuah mesin AI untuk memprediksi obect secara realtime menggunakan algoritma CNN</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement className="vertical-timeline-element--work" date="2023 - 2024" iconStyle={{ background: "white", color: "green" }} icon={<DiNodejs />}>
            <h3 className="vertical-timeline-element-title">Learn NodeJs</h3>
            <h4 className="vertical-timeline-element-subtitle">Institut Teknologi Del</h4>
            <p>Saya belajar membuat sebuah aplikasi notebook menggunakan NodeJS, dan database mongodb atlas dengan mengitegrasikan live chat dan ai </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement className="vertical-timeline-element--work" date="2023 - 2024" iconStyle={{ background: "white", color: "rgb(33, 150, 243)" }} icon={<IoLogoReact />}>
            <h3 className="vertical-timeline-element-title">Learn React Js</h3>
            <h4 className="vertical-timeline-element-subtitle">Institut Teknologi Del</h4>
            <p>Saya belajar membuat sebuah berbagai aplikasi front end seperti portofolio,prediksi mata uang menggunakan CNN dan lain nya </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement className="vertical-timeline-element--work" date="2023 - 2024" iconStyle={{ background: "white", color: "green" }} icon={<FaVuejs />}>
            <h3 className="vertical-timeline-element-title">Learn Vue Js</h3>
            <h4 className="vertical-timeline-element-subtitle">Institut Teknologi Del</h4>
            <p>Saya belajar membuat aplikasi e-tiketing bus danau toba menggunakan front vue js dan backend laravel </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement className="vertical-timeline-element--work" date="2023 - 2024" iconStyle={{ background: "white", color: "blue" }} icon={<GrMysql />}>
            <h3 className="vertical-timeline-element-title">Learn SQL </h3>
            <h4 className="vertical-timeline-element-subtitle">Institut Teknologi Del</h4>
            <p>Saya belajar menganalisis data,ddl (data definition language), DML(data Manipulation language) dan transaksi </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement className="vertical-timeline-element--work" date="2023 - 2024" iconStyle={{ background: "white", color: "black" }} icon={<IoLogoTableau />}>
            <h3 className="vertical-timeline-element-title">Learn Data Analytics </h3>
            <h4 className="vertical-timeline-element-subtitle">Institut Teknologi Del</h4>
            <p>Saya belajar data collection ,data inspection ,data usage.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement className="vertical-timeline-element--work" date="2023 - 2024" iconStyle={{ background: "white", color: "orange" }} icon={<SiPostman />}>
            <h3 className="vertical-timeline-element-title">Learn MicroService </h3>
            <h4 className="vertical-timeline-element-subtitle">Institut Teknologi Del</h4>
            <p>Saya belajar API ,Event-Driven Architecture ,Autentikasi .</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement className="vertical-timeline-element--work" date="2023 - 2024" iconStyle={{ background: "white", color: "rgb(33, 150, 243)" }} icon={<FaGolang />}>
            <h3 className="vertical-timeline-element-title">Learn Golang Backend </h3>
            <h4 className="vertical-timeline-element-subtitle">Institut Teknologi Del</h4>
            <p>Saya belajar OOP ,Microservices ,Goroutines,Encapsulation dan Inheritance,Error Handling .</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <Footer />
      <ScrollTotop />
    </>
  );
}

export default Experience;
