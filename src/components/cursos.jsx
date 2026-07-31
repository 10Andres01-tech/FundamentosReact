function Cursos({ datos }) {
  return (
    <>
      {datos && (
        <section className="card">
          <h2>Cursos Realizados</h2>

          <ul>
            <li>Fundamentos en Data Science</li>
            <li>HTML y CSS</li>
            <li>JavaScript</li>
            <li>Git y GitHub</li>
          </ul>

          <button>Descargar Hoja de Vida</button>
        </section>
      )}
    </>
  );
}

export default Cursos;