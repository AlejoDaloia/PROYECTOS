import './App.css';

function App() {
  return (
    <div className="App">
      <div class="Primer-bloque">
        <header class="Encabezado">
          <div className="Info">
            <h1 class="Nombre">ALEJO D'ALOIA</h1>
            <p>
              Soy un desarrollador web de nivel junior especializado en back-end. Me formé en el instituto de nivel superior Leibnitz en la carrera de analista en sistemas. Busco cada día encontrar formas de poder mejorar y nuevos desafíos que superar.
            </p>
          </div>
          <img src='/imagen_portafolio.jpeg' alt='Imagen' class="Imagen"></img>
        </header>
      </div>

      <section class="seccion tech">
        <h2>Trabajo con</h2>
        <div class="iconos">
          <img src="/html5.png" alt="icono"></img>
          <img src="/css.png" alt="icono"></img>
          <img src="/javascript.png" alt="icono"></img>
          <img src="/nodedotjs.png" alt="icono"></img>
          <img src="/mysql.png" alt="icono"></img>
        </div>
      </section>

      <section class="seccion github">
        <h2>Mi Github</h2>
        <img src="/github.png" alt="icono"></img>
        <p>
          Mi perfil de github donde podrán explorar los proyectos en los que he trabajado.
        </p>
      </section>

      <section class="curriculum">
        <h2>Mi CV</h2>
        <img src="/resume.png" alt="icono"></img>
        <p>
          Mi curriculum por si hay consideraciones.
        </p>
      </section>

      <section class="seccion-contact">
        <h2>Contactame</h2>
        <div class="whatsapp">
          <img src="/whatsapp.png" alt="icono"></img>
          <p>Mi whatsapp</p>
        </div>
        <div class="telefono">
          <img src="/phone-call.png" alt="icono"></img>
          <p>+54 03534063618</p>
        </div>
        <div class="mail">
          <img src="/mail.png" alt="icono"></img>
          <p>alejodaloia03@gmail.com</p>
        </div>
      </section>
    </div>
  );
}

export default App;
