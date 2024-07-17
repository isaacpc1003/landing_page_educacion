import React from 'react';
import './ClientesSection.css';

function ClientesSection() {
  const toggleFaq = (event) => {
    const faqItem = event.currentTarget.parentElement;
    faqItem.classList.toggle('active');
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <h2 className="fade-in-element">El tipo de <span className="highlight">clientes</span> que nos elige <span className="highlight">constantemente</span></h2>
        <div className="faq-container fade-in-element">
          <div className="faq-item">
            <div className="faq-question" onClick={toggleFaq}>
              <h3>★ Los Mejores Colegios de Latinoamérica</h3>
              <span className="faq-icon">+</span>
            </div>
            <div className="faq-answer">
              <p>Colegios que buscan liderar en excelencia educativa eligen nuestra plataforma para proporcionar una educación de vanguardia, optimizando el tiempo de sus docentes y mejorando significativamente el rendimiento académico de sus estudiantes.</p>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question" onClick={toggleFaq}>
              <h3>★ Algunas de las mejores editoriales del continente</h3>
              <span className="faq-icon">+</span>
            </div>
            <div className="faq-answer">
              <p>Editoriales que desean integrar tecnología avanzada en sus publicaciones optan por nuestra IA para ofrecer contenidos interactivos y personalizados, transformando la manera en que los estudiantes interactúan con los libros de texto.</p>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question" onClick={toggleFaq}>
              <h3>★ Institutos Tecnológicos</h3>
              <span className="faq-icon">+</span>
            </div>
            <div className="faq-answer">
              <p>Institutos enfocados en la innovación y la tecnología confían en nuestra plataforma para automatizar procesos educativos y proporcionar herramientas avanzadas que preparan a los estudiantes para los desafíos del futuro.</p>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question" onClick={toggleFaq}>
              <h3>★ Universidades de Prestigio</h3>
              <span className="faq-icon">+</span>
            </div>
            <div className="faq-answer">
              <p>Universidades que buscan mantenerse a la vanguardia de la educación superior eligen nuestra solución para ofrecer una experiencia de aprendizaje personalizada y eficiente, facilitando tanto la enseñanza como la administración académica.</p>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question" onClick={toggleFaq}>
              <h3>Para quien no es este producto</h3>
              <span className="faq-icon">+</span>
            </div>
            <div className="faq-answer">
              <p>Nuestro producto está diseñado para instituciones que están dispuestas a invertir en tecnología avanzada para mejorar sus procesos educativos. Si tu empresa no puede invertir al menos $2000 o no está interesada en el desarrollo tecnológico, este producto no es para ti.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientesSection;
