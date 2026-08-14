import { useState } from "react";

import Header from "./components/Header";
import FormularioDatos from "./components/FormularioDatos";
import FormularioAcademico from "./components/FormularioAcademico";
import FormularioExperiencia from "./components/FormularioExperiencia";
import VistaPrevia from "./components/VistaPrevia";
import Footer from "./components/Footer";

import "./App.css";

function App() {

  // Controla el formulario que se muestra
  const [paso, setPaso] = useState(1);

  // Estado compartido
  const [aprendiz, setAprendiz] = useState({

    // Datos personales
    foto: null,
    nombre: "",
    ciudad: "",
    correo: "",
    programa: "",
    ficha: "",
    jornada: "Mañana",

    // Información de estudios
    nivel: "",
    institucion: "",
    titulo: "",
    anio: "",

    // Cursos
    cursos: [],

    // Experiencia
    experiencias: []

  });


  return (
    <div className="contenedor">

      <div className="contenido">

        <Header />

        {paso === 1 && (
          <FormularioDatos
            datos={aprendiz}
            setDatos={setAprendiz}
            siguiente={() => setPaso(2)}
          />
        )}


        {paso === 2 && (
          <FormularioAcademico
            datos={aprendiz}
            setDatos={setAprendiz}
            anterior={() => setPaso(1)}
            siguiente={() => setPaso(3)}
          />
        )}


        {paso === 3 && (
          <FormularioExperiencia
            datos={aprendiz}
            setDatos={setAprendiz}
            anterior={() => setPaso(2)}
            siguiente={() => setPaso(4)}
          />
        )}


        {paso === 4 && (
          <VistaPrevia
            datos={aprendiz}
            anterior={() => setPaso(3)}
          />
        )}


        <Footer />

      </div>

    </div>
  );
}

export default App;