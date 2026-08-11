function VistaPrevia({ datos, anterior }) {

  // Función para mostrar cada campo
  const campo = (etiqueta, valor) => (

    <p>
      <strong>{etiqueta}:</strong>{" "}
      {valor || "No registrado"}
    </p>

  );

  return (

    <div className="formulario vista-previa">

      <h2>Vista Previa de la Hoja de Vida</h2>


      {/* DATOS PERSONALES */}

      <div className="preview-seccion">

        <h3>Datos Personales</h3>

        {campo("Nombre", datos.nombre)}

        {campo("Edad", datos.edad)}

        {campo("Ciudad", datos.ciudad)}

        {campo("Correo", datos.correo)}

        {campo("Programa", datos.programa)}

        {campo("Ficha", datos.ficha)}

        {campo("Jornada", datos.jornada)}

        {campo("Fotografía", datos.foto)}

      </div>


      {/* INFORMACIÓN ACADÉMICA */}

      <div className="preview-seccion">

        <h3>Información Académica</h3>

        {campo("Nivel de formación", datos.nivel)}

        {campo("Título obtenido", datos.titulo)}

        {campo("Cursos realizados", datos.cursos)}

        {campo("Institución educativa", datos.institucion)}

        {campo("Año de graduación", datos.graduacion)}

      </div>


      {/* EXPERIENCIA */}

      <div className="preview-seccion">

        <h3>Experiencia Laboral</h3>

        {campo("Empresa", datos.empresa)}

        {campo("Cargo", datos.cargo)}

        {campo("Tiempo de experiencia", datos.experiencia)}

        {campo("Funciones desempeñadas", datos.funciones)}

        {campo("Habilidades técnicas", datos.habilidades)}

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