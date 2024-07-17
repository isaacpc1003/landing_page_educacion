import React, { useEffect, useState } from 'react';
import './App.css';
import GradientBackground from './components/GradientBackground';
import logo from './assets/logo4.png';
import video1 from './assets/videos/video1.mp4';
import video2 from './assets/videos/video2.mp4';
import video3 from './assets/videos/video3.mp4';
import video_back_oferta from './assets/videos/video8.mp4';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [currentSection, setCurrentSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in-element');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add('fade-in');
        }
      });

      // Detect current section
      const sections = document.querySelectorAll('section');
      let current = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.pageYOffset >= sectionTop) {
          current = section.getAttribute('id');
        }
      });
      setCurrentSection(current);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      {/* HEADER */}
      <header className="header">
        <img src={logo} alt="Relatividad IA" className="logo" />
      </header>

      {/* SECCION HERO */}
      <section className="hero" id="hero">
        <video src={video_back_oferta} autoPlay loop muted></video>
        <div className="container">
          <h1 className="fade-in-element">
            Transforma tu aula virtual con <span className="highlight">inteligencia artificial</span> avanzada
          </h1>
          <p className="fade-in-element">
            Nuestra plataforma educativa equipada con IA está diseñada para ofrecer una experiencia de aprendizaje personalizada e interactiva, impulsada por un chatbot inteligente que facilita la interacción y mejora el aprendizaje. Aumenta el rendimiento académico y optimiza el tiempo de enseñanza con nuestra solución innovadora.
          </p>
        </div>
      </section>

      {/* SECCION BENEFICIOS */}
      <section id="benefits" className="benefits">
        <div className="container">
          <div className="benefit-item fade-in-element">
            <div className="benefit-content">
              <h3>Aprendizaje Personalizado</h3>
              <p>La IA adapta el contenido educativo según las necesidades de cada estudiante, garantizando un aprendizaje más efectivo.</p>
            </div>
            <div className="video-gradient-container">
              <div className="video-placeholder">
                <video src={video1} autoPlay loop muted></video>
              </div>
              <div className="video-gradient video-gradient-left"></div>
            </div>
          </div>
          {isMobile ? (
            <>
              <div className="benefit-item fade-in-element">
                <div className="benefit-content">
                  <h3>Automatización de Tareas</h3>
                  <p>Automatiza las tareas administrativas y de evaluación, permitiendo a los educadores centrarse en lo que realmente importa: enseñar.</p>
                </div>
                <div className="video-gradient-container">
                  <div className="video-placeholder">
                    <video src={video2} autoPlay loop muted></video>
                  </div>
                  <div className="video-gradient video-gradient-left"></div>
                </div>
              </div>
              <div className="benefit-item fade-in-element">
                <div className="benefit-content">
                  <h3>Interacción Mejorada</h3>
                  <p>El chatbot facilita la comunicación entre estudiantes y profesores, proporcionando respuestas rápidas y recursos adicionales.</p>
                </div>
                <div className="video-gradient-container">
                  <div className="video-placeholder">
                    <video src={video3} autoPlay loop muted></video>
                  </div>
                  <div className="video-gradient video-gradient-right"></div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="benefit-item fade-in-element">
                <div className="video-gradient-container">
                  <div className="video-placeholder">
                    <video src={video2} autoPlay loop muted></video>
                  </div>
                  <div className="video-gradient video-gradient-right"></div>
                </div>
                <div className="benefit-content">
                  <h3>Automatización de Tareas</h3>
                  <p>Automatiza las tareas administrativas y de evaluación, permitiendo a los educadores centrarse en lo que realmente importa: enseñar.</p>
                </div>
              </div>
              <div className="benefit-item fade-in-element">
                <div className="benefit-content">
                  <h3>Interacción Mejorada</h3>
                  <p>El chatbot facilita la comunicación entre estudiantes y profesores, proporcionando respuestas rápidas y recursos adicionales.</p>
                </div>
                <div className="video-gradient-container">
                  <div className="video-placeholder">
                    <video src={video3} autoPlay loop muted></video>
                  </div>
                  <div className="video-gradient video-gradient-left"></div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* SECCION DETALLES */}
      <section id="details" className="details">
        <div className="container">
          <h2 className="fade-in-element">Detalles</h2>
          <p className="fade-in-element">Aquí se explican más detalles de la oferta.</p>
        </div>
      </section>

      {/* SECCION CONTACTO */}
      <section id="contact" className="contact">
        <GradientBackground />
        <div className="container">
          <h2 className="fade-in-element">Experiencia IA</h2>
          <p className="fade-in-element">Para más información o para adquirir el producto, por favor ingresa a la experiencia IA con nuestro chatbot.</p>
          <button className="cta-button fade-in-element">Empezar</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Relatividad IA. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* Navegación lateral */}
      <div className="side-nav">
        <div onClick={() => scrollToSection('hero')} className={currentSection === 'hero' ? 'nav-dot active' : 'nav-dot'}></div>
        <div onClick={() => scrollToSection('benefits')} className={currentSection === 'benefits' ? 'nav-dot active' : 'nav-dot'}></div>
        <div onClick={() => scrollToSection('details')} className={currentSection === 'details' ? 'nav-dot active' : 'nav-dot'}></div>
        <div onClick={() => scrollToSection('contact')} className={currentSection === 'contact' ? 'nav-dot active' : 'nav-dot'}></div>
      </div>
    </div>
  );
}

export default App;
