import './App.css'
import picture from './assets/rt.png'

function App() {
  return (
    <>
      <div className="card">
        <img
          src={picture}s
          className="foto"
        />

        <h1>Andres Felipe</h1>
        <h1>Cuervo Jimenez</h1>      

        <h2>ANÁLISIS Y DESARROLLO DE SOFTWARE</h2>
        <h3>Tecnólogo</h3>

        <hr />

        <h2>Hoja de vida del Aprendiz</h2>
        <p>
          Estudiante de Análisis y Desarrollo de Software con conocimientos en
          desarrollo web utilizando HTML, CSS, JavaScript . Me
          caracterizo por el trabajo en equipo, la responsabilidad y el deseo
          de aprender nuevas tecnologías.
        </p>

        <h2>Información Personal</h2>
        <p><strong>Correo:</strong> andresjimenez.c556@email.com</p>
        <p><strong>Teléfono:</strong> 3204864084</p>
        <p><strong>Ciudad:</strong> Bogotá, Colombia</p>

        <h2>Cursos Realizados</h2>
        <ul>
          <li>Fundamentos en Data science</li>
          <li>html and css</li>
          <li>JavaScript</li>
          <li>Git y GitHub</li>
        </ul>

        <button>Descargar Hoja de Vida</button>
      </div>
    </>
  )
}

export default App