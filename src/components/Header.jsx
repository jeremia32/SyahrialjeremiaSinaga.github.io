import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import profile from "../assets/profile.png";

function Header() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Programmer - iOS Developer - Data Analyst";

  useEffect(() => {
    let index = 0;

    const typeText = () => {
      const typeInterval = setInterval(() => {
        setTypedText(fullText.slice(0, index));
        index++;
        if (index > fullText.length) {
          clearInterval(typeInterval);
          setTimeout(() => {
            index = 0;
            typeText();
          }, 10000); // Wait for 5 seconds before restarting the animation
        }
      }, 100); // Adjust the speed of typing here
    };

    typeText();

    return () => clearInterval(typeText);
  }, [fullText]);
  return (
    <header>
      <div className="header-jumbotron">
        <img src={profile} alt="logo" />
        <h3>Syahrial Jeremia Sinaga</h3>
        <p className="typing-animation">{typedText}</p>
        <div className="socialMedia">
          <a href="https://www.instagram.com/jeremia_sinagaa/">
            <FaInstagram />
          </a>
          <a href="https://www.tiktok.com/@jeremiasinaga01">
            <FaTiktok />
          </a>
          <a href="https://www.linkedin.com/in/syahrial-jeremia-sinaga-33276a270/">
            <FaLinkedin />
          </a>
          <a href="https://github.com/jeremia32">
            <FaGithub />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
