import { useState } from "react";

function FormularioAcademico({
  datos,
  setDatos,
  siguiente,
  anterior
}) {

  // Estado temporal para escribir un nuevo curso
  const [nuevoCurso, setNuevoCurso] = useState("");


  // Actualizar datos
  const actualizar = (campo, valor) => {

    setDatos((anterior) => ({
      ...anterior,
      [campo]: valor
    }));

  };


  // Agregar curso
  const agregarCurso = () => {

    if (nuevoCurso.trim() === "") {
      return;
    }

    setDatos((anterior) => ({
      ...anterior,
      cursos: [
        ...anterior.cursos,
        nuevoCurso.trim()
      ]
    }));

    setNuevoCurso("");

  };


  // Eliminar curso
  const eliminarCurso = (indice) => {

    setDatos((anterior) => ({

      ...anterior,

      cursos: anterior.cursos.filter(
        (_, i) => i !== indice
      )

    }));

  };


  // Continuar
  const continuar = (e) => {

    e.preventDefault();

    siguiente();

  };


  return (
    <div className="formulario">

      <h2>Información Académica</h2>

      <form onSubmit={continuar}>

        <div className="grupo">

          <label>Nivel de Formación</label>

          <select
            value={datos.nivel || "Técnico"}
            onChange={(e) =>
              actualizar("nivel", e.target.value)
            }
          >

            <option>Técnico</option>
            <option>Tecnólogo</option>
            <option>Profesional</option>

          </select>

        </div>


        <div className="grupo">

          <label>Título Obtenido</label>

          <input
            type="text"
            placeholder="Ingrese el título"
            value={datos.titulo || ""}
            onChange={(e) =>
              actualizar("titulo", e.target.value)
            }
            required
          />

        </div>


        <div className="grupo">

          <label>Cursos Realizados</label>

          <input
            type="text"
            placeholder="Ingrese el curso"
            value={nuevoCurso}
            onChange={(e) =>
              setNuevoCurso(e.target.value)
            }
          />

        </div>


        <div className="grupo">

          <label>Institución Educativa</label>

          <input
            type="text"
            placeholder="Ingrese la institución"
            value={datos.institucion || ""}
            onChange={(e) =>
              actualizar("institucion", e.target.value)
            }
            required
          />

        </div>


        <div className="grupo">

          <label>Año de Graduación</label>

          <input
            type="number"
            placeholder="Ejemplo: 2026"
            value={datos.anio || ""}
            onChange={(e) =>
              actualizar("anio", e.target.value)
            }
            required
          />

        </div>


        {/* Botón para agregar curso */}

        <button
          type="button"
          onClick={agregarCurso}
        >
          + Agregar curso
        </button>


        {/* Mostrar los cursos */}

        <div className="lista-cursos">

          {datos.cursos.map((curso, indice) => (

            <div
              className="curso-item"
              key={indice}
            >

              <span>{curso}</span>

              <button
                type="button"
                onClick={() =>
                  eliminarCurso(indice)
                }
              >
                Eliminar
              </button>

            </div>

          ))}

        </div>


        <button
          type="button"
          onClick={anterior}
        >
          Anterior
        </button>


        <button type="submit">
          Siguiente
        </button>

      </form>

    </div>
  );
}

export default FormularioAcademico;