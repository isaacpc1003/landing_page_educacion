import React, { useEffect, useState } from 'react';
import './BenefitsSection.css';
import video1 from 'D:/OneDrive/Documentos1/DocumentosIsaac/TRABAJO/RelatividadIA/landing_page_educacion/src/assets/videos/video1.mp4';
import video2 from 'D:/OneDrive/Documentos1/DocumentosIsaac/TRABAJO/RelatividadIA/landing_page_educacion/src/assets/videos/video2.mp4';
import video3 from 'D:/OneDrive/Documentos1/DocumentosIsaac/TRABAJO/RelatividadIA/landing_page_educacion/src/assets/videos/video3.mp4';

function BenefitsSection() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="demo" className="demo">
      <div className="container">
        <div className="demo-item fade-in-element">
          <div className="demo-content">
            <h3>Aprendizaje <span className="highlight">Personalizado</span></h3>
            <p>La IA adapta el contenido educativo según las necesidades de cada estudiante, garantizando un aprendizaje más efectivo.</p>
          </div>
          <div className="video-gradient-container">
            <div className="video-place">
              <video src={video1} autoPlay loop muted playsInline></video>
            </div>
            <div className="video-gradient video-gradient-left"></div>
          </div>
        </div>
        {isMobile ? (
          <>
            <div className="demo-item fade-in-element">
              <div className="demo-content">
                <h3><span className="highlight">Automatización</span> de Planificaciones</h3>
                <p>Optimiza el tiempo de los docentes con la generación automática de planificaciones detalladas para cada materia y grado.</p>
              </div>
              <div className="video-gradient-container">
                <div className="video-place">
                  <video src={video2} autoPlay loop muted playsInline></video>
                </div>
                <div className="video-gradient video-gradient-left"></div>
              </div>
            </div>
            <div className="demo-item fade-in-element">
              <div className="demo-content">
                <h3>Calificación <span className="highlight">Automática</span> de Trabajos</h3>
                <p>Reduce el tiempo de corrección con la calificación automática de trabajos, proporcionando feedback inmediato y preciso a los estudiantes.</p>
              </div>
              <div className="video-gradient-container">
                <div className="video-place">
                  <video src={video3} autoPlay loop muted playsInline></video>
                </div>
                <div className="video-gradient video-gradient-right"></div>
              </div>
            </div>
            <div className="demo-item fade-in-element">
              <div className="demo-content">
                <h3><span className="highlight">Automatización</span> de Creación de Evaluaciones</h3>
                <p>Genera evaluaciones de manera automática, permitiendo a los docentes enfocarse en la enseñanza mientras la IA se encarga del trabajo repetitivo.</p>
              </div>
              <div className="video-gradient-container">
                <div className="video-place">
                  <video src={video1} autoPlay loop muted playsInline></video>
                </div>
                <div className="video-gradient video-gradient-right"></div>
              </div>
            </div>
            <div className="demo-item fade-in-element">
              <div className="demo-content">
                <h3><span className="highlight">IA Entrenada</span> con los Libros de Texto</h3>
                <p>Asegura la alineación perfecta con el currículo escolar al utilizar una IA entrenada específicamente con los libros de texto oficiales.</p>
              </div>
              <div className="video-gradient-container">
                <div className="video-place">
                  <video src={video2} autoPlay loop muted playsInline></video>
                </div>
                <div className="video-gradient video-gradient-right"></div>
              </div>
            </div>
            <div className="demo-item fade-in-element">
              <div className="demo-content">
                <h3><span className="highlight">Herramientas</span> con <span className="highlight">IA</span> para Padres</h3>
                <p>Empodera a los padres con herramientas de IA que les permiten seguir el progreso académico de sus hijos y apoyar su aprendizaje desde casa.</p>
              </div>
              <div className="video-gradient-container">
                <div className="video-place">
                  <video src={video3} autoPlay loop muted playsInline></video>
                </div>
                <div className="video-gradient video-gradient-right"></div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="demo-item fade-in-element">
              <div className="video-gradient-container">
                <div className="video-place">
                  <video src={video2} autoPlay loop muted playsInline></video>
                </div>
                <div className="video-gradient video-gradient-right"></div>
              </div>
              <div className="demo-content">
                <h3><span className="highlight">Automatización</span> de Planificaciones</h3>
                <p>Optimiza el tiempo de los docentes con la generación automática de planificaciones detalladas para cada materia y grado.</p>
              </div>
            </div>
            <div className="demo-item fade-in-element">
              <div className="demo-content">
                <h3>Calificación <span className="highlight">Automática</span> de Trabajos</h3>
                <p>Reduce el tiempo de corrección con la calificación automática de trabajos, proporcionando feedback inmediato y preciso a los estudiantes.</p>
              </div>
              <div className="video-gradient-container">
                <div className="video-place">
                  <video src={video3} autoPlay loop muted playsInline></video>
                </div>
                <div className="video-gradient video-gradient-left"></div>
              </div>
            </div>
            <div className="demo-item fade-in-element">
              <div className="video-gradient-container">
                <div className="video-place">
                  <video src={video1} autoPlay loop muted playsInline></video>
                </div>
                <div className="video-gradient video-gradient-right"></div>
              </div>
              <div className="demo-content">
                <h3><span className="highlight">Automatización</span> de Creación de Evaluaciones</h3>
                <p>Genera evaluaciones de manera automática, permitiendo a los docentes enfocarse en la enseñanza mientras la IA se encarga del trabajo repetitivo.</p>
              </div>
            </div>
            <div className="demo-item fade-in-element">
              <div className="demo-content">
                <h3><span className="highlight">IA Entrenada</span> con los Libros de Texto</h3>
                <p>Asegura la alineación perfecta con el currículo escolar al utilizar una IA entrenada específicamente con los libros de texto oficiales.</p>
              </div>
              <div className="video-gradient-container">
                <div className="video-place">
                  <video src={video2} autoPlay loop muted playsInline></video>
                </div>
                <div className="video-gradient video-gradient-left"></div>
              </div>
            </div>
            <div className="demo-item fade-in-element">
              <div className="video-gradient-container">
                <div className="video-place">
                  <video src={video3} autoPlay loop muted playsInline></video>
                </div>
                <div className="video-gradient video-gradient-right"></div>
              </div>
              <div className="demo-content">
                <h3><span className="highlight">Herramientas</span> con <span className="highlight">IA</span> para Padres</h3>
                <p>Empodera a los padres con herramientas de IA que les permiten seguir el progreso académico de sus hijos y apoyar su aprendizaje desde casa.</p>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default BenefitsSection;
