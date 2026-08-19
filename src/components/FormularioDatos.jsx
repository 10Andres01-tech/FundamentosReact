function FormularioDatos({ datos, setDatos, siguiente }) {

  // Actualizar datos
  const actualizar = (campo, valor) => {

    setDatos((anterior) => ({
      ...anterior,
      [campo]: valor
    }));

  };


  // Continuar
  const continuar = (e) => {

    e.preventDefault();



    if (datos.nombre.trim() === "") {

      alert(
        "No se puede continuar. Ingrese el nombre completo."
      );

      return;
    }




    if (datos.edad === "" || datos.edad === null) {

      alert(
        "No se puede continuar. Ingrese la edad."
      );

      return;
    }


    const edad = Number(datos.edad);



    if (isNaN(edad)) {

      alert(
        "La edad debe ser un número."
      );

      return;
    }




    if (edad < 1 || edad > 100) {

      alert(
        "La edad debe estar entre 1 y 100 años."
      );

      return;
    }



    if (datos.ciudad.trim() === "") {

      alert(
        "No se puede continuar. Ingrese la ciudad."
      );

      return;
    }



    if (datos.programa.trim() === "") {

      alert(
        "No se puede continuar. Ingrese el programa de formación."
      );

      return;
    }




    if (datos.correo.trim() === "") {

      alert(
        "No se puede continuar. Ingrese el correo electrónico."
      );

      return;
    }




    if (datos.correo.trim().length > 50) {

      alert(
        "El correo electrónico no puede superar los 50 caracteres."
      );

      return;
    }




    const excorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!excorreo.test(datos.correo.trim())) {

      alert(
        "Ingrese un correo electrónico válido."
      );

      return;
    }




    if (datos.ficha === "" || datos.ficha === null) {

      alert(
        "No se puede continuar. Ingrese el número de ficha."
      );

      return;
    }


    const ficha = Number(datos.ficha);


    if (isNaN(ficha) || ficha <= 0) {

      alert(
        "El número de ficha debe ser mayor que 0."
      );

      return;
    }


   

    if (!datos.jornada || datos.jornada.trim() === "") {

      alert(
        "No se puede continuar. Seleccione la jornada."
      );

      return;
    }




    siguiente();

  };


  return (
    <div className="formulario">

      <h2>Registro de Aprendices</h2>

      <form onSubmit={continuar}>


        {/* FOTOGRAFÍA */}

        <div className="grupo">

          <label>Fotografía</label>

          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              actualizar(
                "foto",
                e.target.files?.[0]?.name || ""
              )
            }
          />

        </div>


        {/* NOMBRE */}

        <div className="grupo">

          <label>Nombre Completo</label>

          <input
            type="text"
            placeholder="Ingrese su nombre"
            value={datos.nombre || ""}
            onChange={(e) =>
              actualizar(
                "nombre",
                e.target.value
              )
            }
          />

        </div>


        {/* EDAD */}

        <div className="grupo">

          <label>Edad</label>

          <input
            type="number"
            min="1"
            max="100"
            placeholder="Ingrese su edad"
            value={datos.edad || ""}
            onChange={(e) =>
              actualizar(
                "edad",
                e.target.value
              )
            }
          />

        </div>


        {/* CIUDAD */}

        <div className="grupo">

          <label>Ciudad</label>

          <input
            type="text"
            placeholder="Ingrese su ciudad"
            value={datos.ciudad || ""}
            onChange={(e) =>
              actualizar(
                "ciudad",
                e.target.value
              )
            }
          />

        </div>


        {/* PROGRAMA */}

        <div className="grupo">

          <label>Programa de Formación</label>

          <input
            type="text"
            placeholder="Ejemplo: ADSO"
            value={datos.programa || ""}
            onChange={(e) =>
              actualizar(
                "programa",
                e.target.value
              )
            }
          />

        </div>


        {/* CORREO */}

        <div className="grupo">

          <label>Correo Electrónico</label>

          <input
            type="email"
            placeholder="correo@misena.edu.co"
            maxLength="50"
            value={datos.correo || ""}
            onChange={(e) =>
              actualizar(
                "correo",
                e.target.value
              )
            }
          />

          <small>
            Máximo 50 caracteres.
          </small>

        </div>


        {/* FICHA */}

        <div className="grupo">

          <label>Número de Ficha</label>

          <input
            type="number"
            min="1"
            placeholder="Ingrese la ficha"
            value={datos.ficha || ""}
            onChange={(e) =>
              actualizar(
                "ficha",
                e.target.value
              )
            }
          />

        </div>


        {/* JORNADA */}

        <div className="grupo">

          <label>Jornada</label>

          <select
            value={datos.jornada || ""}
            onChange={(e) =>
              actualizar(
                "jornada",
                e.target.value
              )
            }
          >

            <option value="">
              Seleccione una jornada
            </option>

            <option value="Mañana">
              Mañana
            </option>

            <option value="Tarde">
              Tarde
            </option>

            <option value="Noche">
              Noche
            </option>

            <option value="Mixta">
              Mixta
            </option>

          </select>

        </div>


        {/* BOTÓN */}

        <button type="submit">
          Continuar registro
        </button>

      </form>

    </div>
  );
}

export default FormularioDatos;