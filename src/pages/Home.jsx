import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import logo from '../assets/logorm1.png'

export default function Home(){
  return (
    <section className="home">
      <div className="hero-content">
        <h1>Bem-vindo ao Mundo de Rick & Morty</h1>
        <p>Explore personagens, Episodios e Autores da Página.</p>
        <div className="home-actions">
          <Link to="/characters" className="btn">Ver Personagens</Link>
          <Link to="/episodes" className="btn outline">Ver Episódios</Link>
        </div>

        {/* prominent logo below the buttons */}
        <img src={logo} alt="Rick and Morty logo" className="hero-logo" />
      </div>
    </section>
  )
}
