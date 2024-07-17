import React, { useEffect, useState } from 'react';
// Estilos
import './AppAlternative.css';

// Logos
import logo from './assets/logo4.png'; // Logo negro
import logoWhite from './assets/logo3.png'; // Logo blanco
import openaiLogo from './assets/logos_prov_blanco/openAIlogoblanco.png';
import metaLogo from './assets/logos_prov_blanco/metalogoblanco.png';
import googleLogo from './assets/logos_prov_blanco/googlelogoblanco.png';
import anthropicLogo from './assets/logos_prov_blanco/anthropiclogoblanco2.png';

// Videos
import video2 from './assets/videos/video2.mp4';
import video_back_oferta from './assets/videos/video8.mp4';
import irinavideo from './assets/videos/irinavideo2.mp4'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

// Importar componentes de pagina
import BenefitsSection from './components/BenefitsSection.js';
import ClientesSection from './components/ClientesSection';
import Plyr from 'plyr';

SwiperCore.use([Autoplay]);

function AppAlternative() {
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

  useEffect(() => {
    const buttons = document.querySelectorAll('.neon-button');

    const animate = (event) => {
      const button = event.currentTarget;
      const letters = button.querySelectorAll('.letter');
      // Ocultar RIN y mover I y A
      letters[1].classList.add('hide');
      letters[2].classList.add('hide');
      letters[3].classList.add('hide');
      letters[0].classList.add('move-left');
      letters[4].classList.add('move-right');
    };

    const reset = (event) => {
      const button = event.currentTarget;
      const letters = button.querySelectorAll('.letter');
      // Mostrar RIN y devolver I y A a su posición original
      letters[1].classList.remove('hide');
      letters[2].classList.remove('hide');
      letters[3].classList.remove('hide');
      letters[0].classList.remove('move-left');
      letters[4].classList.remove('move-right');
    };

    buttons.forEach(button => {
      button.addEventListener('mouseenter', animate);
      button.addEventListener('mouseleave', reset);
    });

    return () => {
      buttons.forEach(button => {
        button.removeEventListener('mouseenter', animate);
        button.removeEventListener('mouseleave', reset);
      });
    };
  }, []);

  useEffect(() => {
    const buttons = document.querySelectorAll('.neon-button');
  
    function toggleBackground() {
      buttons.forEach(button => {
        button.classList.toggle('active-background');
      });
    }
  
    const backgroundInterval = setInterval(toggleBackground, 1100);
  
    return () => clearInterval(backgroundInterval);
  }, []);

  useEffect(() => {
    const comments = document.querySelectorAll('.comment');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;
    let intervalId;

    function showComment(index) {
      comments.forEach((comment, i) => {
        comment.classList.remove('active');
        comment.style.transform = `translateX(${100 * (i - index)}%) scale(${i === index ? 1 : 0.8})`;
        comment.style.zIndex = i === index ? 1 : 0;
      });
      comments[index].classList.add('active');
    }

    function nextComment() {
      currentIndex = (currentIndex + 1) % comments.length;
      showComment(currentIndex);
    }

    function prevComment() {
      currentIndex = (currentIndex - 1 + comments.length) % comments.length;
      showComment(currentIndex);
    }

    function startAutoSlide() {
      intervalId = setInterval(nextComment, 17000); // Cambia cada 5 segundos
    }

    function stopAutoSlide() {
      clearInterval(intervalId);
    }

    if (prevBtn && nextBtn) {
      nextBtn.addEventListener('click', () => {
        stopAutoSlide();
        nextComment();
        startAutoSlide();
      });

      prevBtn.addEventListener('click', () => {
        stopAutoSlide();
        prevComment();
        startAutoSlide();
      });

      showComment(currentIndex);
      startAutoSlide();
    }
  }, []);

  useEffect(() => {
    const player = new Plyr('#video-benefits');
  }, []);

  return (
    <div className="App">
      {/* HEADER */}
      <header className="header">
        <img src={logo} alt="Relatividad IA" className="logo logo-black" />
        <img src={logoWhite} alt="Relatividad IA" className="logo logo-white" />
      </header>

      {/* SECCION HERO */}
      <section className="hero" id="hero">
        <video src={video_back_oferta} autoPlay loop muted playsInline></video>
        <div className="container">
          <h1 className="fade-in-element">
          Ponemos la <span className="highlight">IA</span> en manos de <span className="highlight">docentes</span> y <span className="highlight">estudiantes</span>, aseguramos el <span className="highlight">doble</span> de conocimientos en la <span className="highlight">mitad</span> de tiempo
          </h1>
          <p className="fade-in-element">
            Construimos tu plataforma educativa personalizada con IA que automatiza la creación de planificaciones, evaluaciones y actividades; califica de manera automatizada y personaliza la educación de cada estudiante. En el video de abajo te explicamos como empezar.
          </p>
        </div>
        <div className="arrow-container fade-in-element">
          <img src={require('./assets/icons/arrow.png')} alt="Flecha hacia abajo" className="arrow-down" onClick={() => scrollToSection('benefits')} />
        </div>
      </section>

      {/* SECCION BENEFICIOS */}
      <section id="benefits" className="benefits">
        <div className="container">
          <div className="video-placeholder">
            <video id="video-benefits" className="plyr" controls>
              <source src={video2} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* SECCION CONTACTO */}
      <section id="contact" className="contact">
        <video src={irinavideo} autoPlay loop muted playsInline className="background-video"></video>
        <div className="container">
          <h2 className="fade-in-element">Agenda una cita en <span className="highlight">segundos</span> con</h2>
          <p className="fade-in-element">
            {/* Para más información o para adquirir el producto, por favor ingresa a la experiencia IA */}
          </p>
          <button className="neon-button fade-in-element">
            <span className="diseño"></span>
            <span className="diseño"></span>
            <span className="diseño"></span>
            <span className="diseño"></span>

            <span className="letter i-left">I</span>
            <span className="letter r">R</span>
            <span className="letter i-right">I</span>
            <span className="letter n">N</span>
            <span className="letter a">A</span>

            
          </button>

        </div>
      </section>

      {/* SECCION PROVEEDORES */}
      <section className="providers" id="providers">
        <div className="container">
          <h2 className="fade-in-element">Nuestros <span className="highlight">proveedores</span> asociados</h2>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={isMobile ? 3 : 4}
            loop={true}
            autoplay={{
              delay: 1300,
              disableOnInteraction: false,
            }}
            className='fade-in-element'
          >
            <SwiperSlide>
              <img src={openaiLogo} alt="OpenAI" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={metaLogo} alt="Meta" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={googleLogo} alt="Google" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={anthropicLogo} alt="Anthropic" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={openaiLogo} alt="OpenAI" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={metaLogo} alt="Meta" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={googleLogo} alt="Google" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={anthropicLogo} alt="Anthropic" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* SECCION COMENTARIOS */}
      <section className="comments-section" id="comments">
        <div className="comments-container fade-in-element">
          <h2 className='fade-in-element'>
            Lo que dicen nuestros <span className="highlight">clientes</span>
          </h2>
          <div className="comment-carousel fade-in-element">
            <div className="comment">
              <div className="comment-card">
                <div className="stars">★★★★★</div>
                <p className="comment-text">"Desde que implementamos esta IA, hemos visto un aumento significativo en el rendimiento académico. Nuestros estudiantes aprenden como nunca vimos antes. Y a nosotros los docentes, nos liberó muchísimo tiempo."</p>
                <p className="author">- María Rodríguez, Directora de Colegio Santa María</p>
              </div>
            </div>
            <div className="comment">
              <div className="comment-card">
                <div className="stars">★★★★☆</div>
                <p className="comment-text">"La IA ha sido un cambio radical para nosotros. No solo hemos tenido más enfoque para las clases gracias a la automatización de planificaciones y pruebas, sino que nuestros estudiantes ahora ¡conversan con sus libros de texto! Dimos un paso al futuro."</p>
                <p className="author">- Carlos Fernández, Rector de Colegio San Marcos</p>
              </div>
            </div>
            <div className="comment">
              <div className="comment-card">
                <div className="stars">★★★★★</div>
                <p className="comment-text">"No puedo creer que apenas han pasado 6 meses, parece que estamos 5 años en el futuro. Ahora solo somos educadores y ya no perdemos tiempo con tareas administrativas. Nuestros estudiantes devoran la tecnología como solo ellos pueden."</p>
                <p className="author">- Luis Ramírez, Rector de Colegio El Roble</p>
              </div>
            </div>
          </div>
          <div className="carousel-controls fade-in-element">
            <button className="prev">&#10094;</button>
            <button className="next">&#10095;</button>
          </div>
        </div>
      </section>

     <BenefitsSection />

     {/* SECCION CONTACTO */}
     <section id="contact2" className="contact">
        <video src={irinavideo} autoPlay loop muted playsInline className="background-video"></video>
        <div className="container">
          <h2 className="fade-in-element">Agenda una cita en <span className="highlight">segundos</span> con</h2>
          <p className="fade-in-element">
            {/* Para más información o para adquirir el producto, por favor ingresa a la experiencia IA */}
          </p>
          <button className="neon-button fade-in-element">
            <span className="diseño"></span>
            <span className="diseño"></span>
            <span className="diseño"></span>
            <span className="diseño"></span>

            <span className="letter i-left">I</span>
            <span className="letter r">R</span>
            <span className="letter i-right">I</span>
            <span className="letter n">N</span>
            <span className="letter a">A</span>
          </button>
        </div>
      </section>
      
      {/* SECCIÓN CLIENTES */}
      <ClientesSection />
   
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
        <div onClick={() => scrollToSection('contact')} className={currentSection === 'contact' ? 'nav-dot active' : 'nav-dot'}></div>
        <div onClick={() => scrollToSection('providers')} className={currentSection === 'providers' ? 'nav-dot active' : 'nav-dot'}></div>
        <div onClick={() => scrollToSection('comments')} className={currentSection === 'comments' ? 'nav-dot active' : 'nav-dot'}></div>
        <div onClick={() => scrollToSection('demo')} className={currentSection === 'demo' ? 'nav-dot active' : 'nav-dot'}></div>
        <div onClick={() => scrollToSection('contact2')} className={currentSection === 'contact2' ? 'nav-dot active' : 'nav-dot'}></div>
        <div onClick={() => scrollToSection('faq')} className={currentSection === 'faq' ? 'nav-dot active' : 'nav-dot'}></div>
      </div>
    </div>
  );
}

export default AppAlternative;