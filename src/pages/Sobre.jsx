import React from 'react'

import "./Sobre.css";

export default function About(){
  return (
    <div className="about-page">

      {/* CONTAINER DOS CARDS */}
      <section className="cards-container">

        {/* CARD 1 – Arielly */}
        <div className="card">
          <div className="portal-hover">
            <img src="/img/arielly.png" alt="Arielly Cardoso" />
          </div>
          <h2>Arielly Cardoso</h2>
          <p>@instagram</p>
          <a href="https://github.com" target="_blank">GitHub</a>
        </div>

        {/* CARD 2 – Marcelle */}
        <div className="card">
          <div className="portal-hover">
            <img src="/img/marcelle.png" alt="Marcelle de Lima" />
          </div>
          <h2>Marcelle de Lima</h2>
          <p>@instagram</p>
          <a href="https://github.com" target="_blank">GitHub</a>
        </div>

        {/* CARD 3 – Victor */}
        <div className="card">
          <div className="portal-hover">
            <img src="/img/victor.png" alt="Victor" />
          </div>
          <h2>Victor</h2>
          <p>@instagram</p>
          <a href="https://github.com" target="_blank">GitHub</a>
        </div>

        {/* CARD 4 – Enrique */}
        <div className="card">
          <div className="portal-hover">
            <img src="/img/enrique.png" alt="Enrique" />
          </div>
          <h2>Enrique</h2>
          <p>@instagram</p>
          <a href="https://github.com" target="_blank">GitHub</a>
        </div>

        <p className="about-text">
          Este projeto foi desenvolvido para estudar React, rotas, componentes,
          consumo de API e organização de páginas, utilizando a API oficial de
          Rick and Morty. O objetivo é criar uma aplicação simples, bonita e
          funcional, explorando personagens, localizações e curiosidades da série.
       </p>

      </section>
    </div>
  );
}