import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <hr />
      <div className="footer-content">
        <hr />
        <div className="footer-top">
          <div className="footer-left">
            <div className="footer-logo-section">
              <div className='Notion-logo'><img className="footer-logo" src="\src\assets\img\logo-notion.webp" alt="Notion Logo" /> <p>Notion</p></div>
              <div className="social-icons">
                <a href="#"><img src="\src\assets\img\insta-logo.webp" alt="Instagram" /></a>
                <a href="#"><img src="\src\assets\img\twitter.png" alt="Twitter" /></a>
                <a href="#"><img src="\src\assets\img\LINKEDIN_icon-icons.webp" alt="LinkedIn" /></a>
                <a href="#"><img src="\src\assets\img\Icono-facebook-Sotodrone.png" alt="Facebook" /></a>
                <a href="#"><img src="\src\assets\img\YOUTUBE_icon-icons.webp" alt="YouTube" /></a>
              </div>
            </div>
            <div className="footer-language">
              <select>
                <option value="es">Español (España)</option>
                <option value="el">Español (Latinoamérica)</option>
                <option value="de">Deutsch (Alemania)</option>
                <option value="zh-CN">Chino (Chino Simplificado)</option>
                <option value="zh-TW">Chino (Chino Tradicional)</option>
                <option value="en">English (Inglés)</option>
              </select>
            </div>
          </div>

          <div className="footer-right">
            <div className="footer-links-section">
              <div className="footer-column">
                <h4>Empresa</h4>
                <a href="#">Conócenos</a>
                <a href="#">Únete a nuestro equipo</a>
                <a href="#">Seguridad</a>
                <a href="#">Estado</a>
                <a href="#">Términos de uso y privacidad</a>
              </div>
              <div className="footer-column">
                <h4>Descargar</h4>
                <a href="#">iOS y Android</a>
                <a href="#">Mac y Windows</a>
                <a href="#">Notion Calendar</a>
                <a href="#">Web Clipper</a>
              </div>
              <div className="footer-column">
                <h4>Recursos</h4>
                <a href="#">Centro de ayuda</a>
                <a href="#">Precios</a>
                <a href="#">Blog</a>
                <a href="#">Comunidad</a>
                <a href="#">Integraciones</a>
                <a href="#">Plantillas</a>
                <a href="#">Afiliados</a>
              </div>
              <div className="footer-column">
                <h4>Notion para</h4>
                <a href="#">Empresa</a>
                <a href="#">Pequeña empresa</a>
                <a href="#">Uso personal</a>
                <a href="#">Explorar más →</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <h5 className='title'>No vendemos ni compartimos tus <br /> datos personales</h5>
          <p>Configuración de cookies</p>
          <h5>© 2024 Notion Labs, Inc.</h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
