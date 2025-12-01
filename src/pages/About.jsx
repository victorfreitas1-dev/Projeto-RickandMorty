import React from 'react'

import "./Sobre.css";
import ariellyImg from '../assets/ariellyfotorm.jpg'
import marcelleImg from '../assets/marcellefotrm.jpg'
import victorImg from '../assets/victorfotorm.jpg'
import enriqueImg from '../assets/henriquefotorm.jpg'

export default function About(){
  return (
    <div className="about-page">

      {/* CONTAINER DOS CARDS */}
      <section className="cards-container">

        {/* CARD 1 – Arielly */}
        <div className="card">
          <div className="portal-hover">
            <img src={ariellyImg} alt="Arielly Cardoso" />
          </div>
          <h2>Arielly Cardoso</h2>
          <p><a href="https://www.instagram.com/ariellycardoso_?igsh=eWVpOHdpN3Zkd3Vt&utm_source=qr">@arielly</a></p>
          <a href="https://github.com/Arielly-Cardoso" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>

        {/* CARD 2 – Marcelle */}
        <div className="card">
          <div className="portal-hover">
            <img src={marcelleImg} alt="Marcelle de Lima" />
          </div>
          <h2>Marcelle de Lima</h2>
          <p><a href="https://www.instagram.com/marcelle.limaa?igsh=OHFjMGJmMW91N3Vq&utm_source=qr">@marcelle</a></p>
          <a href="https://github.com/MALI-0" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>

        {/* CARD 3 – Victor */}
        <div className="card">
          <div className="portal-hover">
            <img src={victorImg} alt="Victor" />
          </div>
          <h2>Victor</h2>
          <p><a href="https://www.instagram.com/victorfreitas1_/">@victor</a></p>
          <a href="https://github.com/victorfreitas1-dev" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>

       
        <div className="card">
          <div className="portal-hover">
            <img src={enriqueImg} alt="Enrique" />
          </div>
          <h2>Henrique</h2>
          <p><a href="https://www.instagram.com/henrique.jr.25?igsh=MWN0anZ0YWZkaHZiaA%3D%3D&utm_source=qr ">@Henrique</a></p>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>

        

      </section>

      {/* PROJECT ABOUT SECTION */}
      <section className="project-about">
        <div className="project-about-inner">
          <h2>Sobre o Projeto Rick & Morty</h2>
          <p>
            Esse Projeto foi desenvolvido por Alunos da Turma de Análise e
            Desenvolvimento de Sistemas da Faculdade Uninassau do turno da noite,
            com a instrução da Professora Claudianny Martins, da disciplina de
            Front-end e Frameworks como parte de um estudo sobre React e consumo de APIs.
          </p>
        </div>
      </section>
    </div>
  );
}
