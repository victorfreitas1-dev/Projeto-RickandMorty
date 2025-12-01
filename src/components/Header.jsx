import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/logorm1.png'

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" className="site-logo" />
          <span className="logo-text">Mundo Rick & Morty</span>
        </Link>
      </div>
      <nav>
        <NavLink to="/characters" className={({isActive}) => isActive ? "nav-active" : ""}>Personagens</NavLink>
        <NavLink to="/episodes" className={({isActive}) => isActive ? "nav-active" : ""}>Episódios</NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? "nav-active" : ""}>Quem Somos</NavLink>
      </nav>
    </header>
  )
}
