import { useState } from "react";

function FormularioAcademico({
  datos,
  setDatos,
  siguiente,
  anterior
}) {


  const [nuevoCurso, setNuevoCurso] = useState("");



  const actualizar = (campo, valor) => {

    setDatos((anterior) => ({
      ...anterior,
      [campo]: valor
    }));

  };




  const agregarCurso = () => {

    if (nuevoCurso.trim() === "") {

      alert(
        "Ingrese el nombre del curso antes de agregarlo."
      );

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




  const eliminarCurso = (indice) => {

    setDatos((anterior) => ({

      ...anterior,

      cursos: anterior.cursos.filter(
        (_, i) => i !== indice
      )

    }));

  };




  const continuar = (e) => {

    e.preventDefault();




    if (!datos.nivel || datos.nivel.trim() === "") {

      alert(
        "No se puede continuar. Seleccione el nivel de formación."
      );

      return;
    }




    if (!datos.titulo || datos.titulo.trim() === "") {

      alert(
        "No se puede continuar. Ingrese el título obtenido."
      );

      return;
    }




    if (
      !datos.institucion ||
      datos.institucion.trim() === ""
    ) {

      alert(
        "No se puede continuar. Ingrese la institución educativa."
      );

      return;
    }




    if (!datos.anio || datos.anio.trim() === "") {

      alert(
        "No se puede continuar. Ingrese el año de graduación."
      );

      return;
    }


    const anio = Number(datos.anio);

    const anioActual = new Date().getFullYear();


    if (isNaN(anio)) {

      alert(
        "El año de graduación debe ser un número."
      );

      return;
    }


    if (anio < 1900 || anio > anioActual) {

      alert(
        `El año de graduación debe estar entre 1900 y ${anioActual}.`
      );

      return;
    }




    if (!datos.cursos || datos.cursos.length === 0) {

      alert(
        "No se puede continuar. Debe agregar al menos un curso realizado."
      );

      return;
    }



    siguiente();

  };


  return (
    <div className="formulario">

      <h2>Información Académica</h2>

      <form onSubmit={continuar}>


        {/* NIVEL */}

        <div className="grupo">

          <label>Nivel de Formación</label>

          <select
            value={datos.nivel || ""}
            onChange={(e) =>
              actualizar(
                "nivel",
                e.target.value
              )
            }
          >

            <option value="">
              Seleccione un nivel
            </option>

            <option value="Técnico">
              Técnico
            </option>

            <option value="Tecnólogo">
              Tecnólogo
            </option>

            <option value="Profesional">
              Profesional
            </option>

          </select>

        </div>


        {/* TÍTULO */}

        <div className="grupo">

          <label>Título Obtenido</label>

          <input
            type="text"
            placeholder="Ingrese el título"
            value={datos.titulo || ""}
            onChange={(e) =>
              actualizar(
                "titulo",
                e.target.value
              )
            }
          />

        </div>


        {/* CURSOS */}

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


        {/* INSTITUCIÓN */}

        <div className="grupo">

          <label>Institución Educativa</label>

          <input
            type="text"
            placeholder="Ingrese la institución"
            value={datos.institucion || ""}
            onChange={(e) =>
              actualizar(
                "institucion",
                e.target.value
              )
            }
          />

        </div>


        {/* AÑO */}

        <div className="grupo">

          <label>Año de Graduación</label>

          <input
            type="number"
            min="1900"
            max={new Date().getFullYear()}
            placeholder="Ejemplo: 2026"
            value={datos.anio || ""}
            onChange={(e) =>
              actualizar(
                "anio",
                e.target.value
              )
            }
          />

        </div>


        {/* AGREGAR CURSO */}

        <button
          type="button"
          onClick={agregarCurso}
        >
          + Agregar curso
        </button>


        {/* LISTA DE CURSOS */}

        <div className="lista-cursos">

          {datos.cursos.map(
            (curso, indice) => (

              <div
                className="curso-item"
                key={indice}
              >

                <span>
                  {curso}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    eliminarCurso(indice)
                  }
                >
                  Eliminar
                </button>

              </div>

            )
          )}

        </div>


        {/* ANTERIOR */}

        <button
          type="button"
          onClick={anterior}
        >
          Anterior
        </button>


        {/* SIGUIENTE */}

        <button type="submit">
          Siguiente
        </button>

      </form>

    </div>
  );
}

export default FormularioAcademico;