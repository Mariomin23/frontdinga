import './sostenibilidad.css';

const Sostenibilidad = () => {
  return (
    <section id="sostenibilidad" className="sostenibilidad-section">
      <div className="sostenibilidad-container">
        
        <div className="sostenibilidad-text">
          <h2>Moda que respira con el planeta</h2>
          <p>
            Nuestros leggings no solo definen tu figura, definen tu compromiso. 
            Utilizamos tecnología de reciclado textil para convertir residuos 
            oceánicos en prendas de alto rendimiento.
          </p>
          <ul className="eco-features">
            <li><span className="eco-icon">✔</span> 100% Poliéster Reciclado</li>
            <li><span className="eco-icon">✔</span> Tintes naturales sin tóxicos</li>
            <li><span className="eco-icon">✔</span> Producción local ética</li>
          </ul>
        </div>
       <div className="sostenibilidad-video-container">
  <iframe 
    width="100%" 
    height="400" 
    src="https://www.youtube.com/embed/2_ntVE1pqes" 
    title="La Mandinga - Sostenibilidad" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowFullScreen
    style={{ 
      borderRadius: '20px', 
      boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
      border: 'none'
    }}
  ></iframe>
</div>

      </div>
    </section>
  );
};

export default Sostenibilidad;