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



  const actualizar = (campo, valor) => {

    setExperiencia((anterior) => ({
      ...anterior,
      [campo]: valor
    }));

  };


  const agregarExperiencia = () => {


  

    if (experiencia.empresa.trim() === "") {

      alert(
        "Ingrese el nombre de la empresa."
      );

      return;
    }




    if (experiencia.cargo.trim() === "") {

      alert(
        "Ingrese el cargo desempeñado."
      );

      return;
    }




    if (experiencia.tiempo.trim() === "") {

      alert(
        "Ingrese el tiempo de experiencia."
      );

      return;
    }




    if (experiencia.funciones.trim() === "") {

      alert(
        "Ingrese las funciones desempeñadas."
      );

      return;
    }




    if (experiencia.habilidades.trim() === "") {

      alert(
        "Ingrese las habilidades técnicas."
      );

      return;
    }




    setDatos((anterior) => ({

      ...anterior,

      experiencias: [
        ...anterior.experiencias,
        {
          ...experiencia
        }
      ]

    }));



    setExperiencia({

      empresa: "",
      cargo: "",
      tiempo: "",
      funciones: "",
      habilidades: ""

    });

  };




  const eliminarExperiencia = (indice) => {

    setDatos((anterior) => ({

      ...anterior,

      experiencias: anterior.experiencias.filter(
        (_, i) => i !== indice
      )

    }));

  };




  const continuar = (e) => {

    e.preventDefault();




    if (
      !datos.experiencias ||
      datos.experiencias.length === 0
    ) {

      alert(
        "No se puede continuar. Debe agregar al menos una experiencia laboral."
      );

      return;
    }



    const hayDatosSinGuardar =
      experiencia.empresa.trim() !== "" ||
      experiencia.cargo.trim() !== "" ||
      experiencia.tiempo.trim() !== "" ||
      experiencia.funciones.trim() !== "" ||
      experiencia.habilidades.trim() !== "";


    if (hayDatosSinGuardar) {

      alert(
        "Tiene una experiencia sin agregar. Complete todos los campos y presione '+ Agregar experiencia'."
      );

      return;
    }




    siguiente();

  };


  return (
    <div className="formulario">

      <h2>Experiencia Laboral</h2>

      <form onSubmit={continuar}>


        {/* EMPRESA */}

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


        {/* CARGO */}

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


        {/* TIEMPO */}

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


        {/* FUNCIONES */}

        <div className="grupo">

          <label>
            Funciones desempeñadas
          </label>

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


        {/* HABILIDADES */}

        <div className="grupo">

          <label>
            Habilidades Técnicas
          </label>

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


        {/* AGREGAR EXPERIENCIA */}

        <button
          type="button"
          onClick={agregarExperiencia}
        >
          + Agregar experiencia
        </button>


        {/* LISTA DE EXPERIENCIAS */}

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


        {/* ANTERIOR */}

        <button
          type="button"
          onClick={anterior}
        >
          Anterior
        </button>


        {/* VISTA PREVIA */}

        <button type="submit">
          Vista previa
        </button>

      </form>

    </div>
  );
}

export default FormularioExperiencia;