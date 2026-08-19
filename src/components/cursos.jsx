function Cursos({ datos }) {

  return (
    <>
      {datos && (

        <section className="card">

          <h2>Cursos Realizados</h2>


          {datos.cursos && datos.cursos.length > 0 ? (

            <ul>

              {datos.cursos.map(
                (curso, indice) => (

                  <li key={indice}>
                    {curso}
                  </li>

                )
              )}

            </ul>

          ) : (

            <p>
              No hay cursos registrados.
            </p>

          )}


          <button>
            Descargar Hoja de Vida
          </button>

        </section>

      )}
    </>
  );
}

export default Cursos;