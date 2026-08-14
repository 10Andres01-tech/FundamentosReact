import { useState } from "react";

function FormularioExperiencia({
  datos,
  setDatos,
  anterior,
  siguiente
}) {

  // Estado temporal de una experiencia
  const [experiencia, setExperiencia] = useState({

    empresa: "",
    cargo: "",
    tiempo: "",
    funciones: "",
    habilidades: ""

  });


  // Actualizar experiencia
  const actualizar = (campo, valor) => {

    setExperiencia((anterior) => ({
      ...anterior,
      [campo]: valor
    }));

  };


  // Agregar experiencia
  const agregarExperiencia = () => {

    setDatos((anterior) => ({

      ...anterior,

      experiencias: [
        ...anterior.experiencias,
        experiencia
      ]

    }));


    // Limpiar formulario

    setExperiencia({

      empresa: "",
      cargo: "",
      tiempo: "",
      funciones: "",
      habilidades: ""

    });

  };


  // Eliminar experiencia
  const eliminarExperiencia = (indice) => {

    setDatos((anterior) => ({

      ...anterior,

      experiencias: anterior.experiencias.filter(
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

      <h2>Experiencia Laboral</h2>

      <form onSubmit={continuar}>

        <div className="grupo">

          <label>Empresa</label>

          <input
            type="text"
            placeholder="Nombre de la empresa"
            value={experiencia.empresa}
            onChange={(e) =>
              actualizar(
                "empresa",
                e.target.value
              )
            }
          />

        </div>


        <div className="grupo">

          <label>Cargo</label>

          <input
            type="text"
            placeholder="Cargo desempeñado"
            value={experiencia.cargo}
            onChange={(e) =>
              actualizar(
                "cargo",
                e.target.value
              )
            }
          />

        </div>


        <div className="grupo">

          <label>Tiempo de experiencia</label>

          <input
            type="text"
            placeholder="Ej: 2 años"
            value={experiencia.tiempo}
            onChange={(e) =>
              actualizar(
                "tiempo",
                e.target.value
              )
            }
          />

        </div>


        <div className="grupo">

          <label>Funciones desempeñadas</label>

          <textarea
            rows="5"
            placeholder="Describa las funciones realizadas"
            value={experiencia.funciones}
            onChange={(e) =>
              actualizar(
                "funciones",
                e.target.value
              )
            }
          ></textarea>

        </div>


        <div className="grupo">

          <label>Habilidades Técnicas</label>

          <textarea
            rows="5"
            placeholder="Ejemplo: Java, React, MySQL..."
            value={experiencia.habilidades}
            onChange={(e) =>
              actualizar(
                "habilidades",
                e.target.value
              )
            }
          ></textarea>

        </div>


        {/* Agregar experiencia */}

        <button
          type="button"
          onClick={agregarExperiencia}
        >
          + Agregar experiencia
        </button>


        {/* Mostrar experiencias */}

        <div className="lista-experiencias">

          {datos.experiencias.map(
            (experiencia, indice) => (

              <div
                className="experiencia-item"
                key={indice}
              >

                <p>
                  <strong>Empresa:</strong>{" "}
                  {experiencia.empresa}
                </p>

                <p>
                  <strong>Cargo:</strong>{" "}
                  {experiencia.cargo}
                </p>

                <p>
                  <strong>Tiempo:</strong>{" "}
                  {experiencia.tiempo}
                </p>

                <p>
                  <strong>Funciones:</strong>{" "}
                  {experiencia.funciones}
                </p>

                <p>
                  <strong>Habilidades:</strong>{" "}
                  {experiencia.habilidades}
                </p>


                <button
                  type="button"
                  onClick={() =>
                    eliminarExperiencia(indice)
                  }
                >
                  Eliminar
                </button>

              </div>

            )
          )}

        </div>


        <button
          type="button"
          onClick={anterior}
        >
          Anterior
        </button>


        <button type="submit">
          Vista previa
        </button>

      </form>

    </div>
  );
}

export default FormularioExperiencia;