import React from "react";
import "./About.css";
import Modal from "../modal/Modal";
import { useModal } from "../../hooks/useModal";
import aboutImg from "../../media/aboutImg.jpg";
import cv from "../../docs/cv.pdf";
import cvJuan from "../../media/cvJuan.png";

const About = () => {
  const [isOpenCv, openCv, closeCv] = useModal(false);

  return (
    <>
      <a name="About" id="About" href="/#">
        {" "}
      </a>
      <div className="about-container">
        <div className="about-txt">
          <h3>Sobre Mi</h3>
          <p>
            Mi nombre es Juan David Hernandez tengo 30 años soy de Colombia, soy
            desarrollador web full stack con javascript, en el fontend con ract
            y en el backend con node.js, me gusta trabajar en equipo, me adapto
            facil a mi entorno de trabajo, me gusta mi trabajo, tengo excelente
            capacidad de escucha activa.
          </p>
          <a href={cv} download={cv}>
            <button>
              <i class="fa-solid fa-file-pdf"></i>
            </button>
          </a>
        </div>
        <figure className="about-img">
          <img src={aboutImg} alt="about" />
          <div class="capa_1">
            <h3>Juan Hernandez</h3>
            <p>Desarrollador Web</p>
            <button onClick={openCv}>Ver cv</button>
          </div>
        </figure>
      </div>
      <div>
        <Modal isOpen={isOpenCv} closeModal={closeCv}>
          <img className="img-modal-cv" src={cvJuan} alt="cv" />
        </Modal>
      </div>
    </>
  );
};

export default About;
