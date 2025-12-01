import './Footer.css'
import logo from '../assets/logorm1.png'

export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-inner">
        <img src={logo} alt="logo" className="footer-logo" />
        <div className="footer-text">
          <h3>© rymotys (rick and morty fans) 2025</h3>
          <h4>Alunos Uninassau ADS</h4>
        </div>
      </div>
    </footer>
  )
}
