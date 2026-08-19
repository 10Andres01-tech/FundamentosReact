function VistaPrevia({ datos, anterior }) {

  const campo = (etiqueta, valor) => (

    <p>
      <strong>{etiqueta}:</strong>{" "}
      {valor || "No registrado"}
    </p>

  );


  return (
    <div className="formulario vista-previa">

      <h2>Vista Previa de la Hoja de Vida</h2>


      {/* Datos personales */}

      <div className="preview-seccion">

        <h3>Datos personales</h3>

        {campo("Nombre", datos.nombre)}

        {campo("Edad", datos.edad)}

        {campo("Ciudad", datos.ciudad)}

        {campo("Correo", datos.correo)}

        {campo("Programa", datos.programa)}

        {campo("Ficha", datos.ficha)}

        {campo("Jornada", datos.jornada)}

      </div>


      {/* Información académica */}

      <div className="preview-seccion">

        <h3>Información académica</h3>

        {campo("Nivel", datos.nivel)}

        {campo("Título", datos.titulo)}

        {campo("Institución", datos.institucion)}

        {campo("Año de graduación", datos.anio)}

      </div>


      {/* Cursos */}

      <div className="preview-seccion">

        <h3>Cursos realizados</h3>

        <ul>

          {datos.cursos.map(
            (curso, indice) => (

              <li key={indice}>
                {curso}
              </li>

            )
          )}

        </ul>

      </div>


      {/* Experiencias */}

      <div className="preview-seccion">

        <h3>Experiencia laboral</h3>

        {datos.experiencias.map(
          (experiencia, indice) => (

            <div
              className="preview-experiencia"
              key={indice}
            >

              <h4>
                Experiencia {indice + 1}
              </h4>

              {campo(
                "Empresa",
                experiencia.empresa
              )}

              {campo(
                "Cargo",
                experiencia.cargo
              )}

              {campo(
                "Tiempo",
                experiencia.tiempo
              )}

              {campo(
                "Funciones",
                experiencia.funciones
              )}

              {campo(
                "Habilidades",
                experiencia.habilidades
              )}

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

    </div>
  );
}

export default VistaPrevia;