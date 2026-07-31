import { useState } from 'react'

function FormularioDatos() {
  const [foto, setFoto] = useState(null)
  const [nombre, setNombre] = useState('')
  const [edad, setEdad] = useState('')
  const [ciudad, setCiudad] = useState('')
  const [programa, setPrograma] = useState('')
  const [correo, setCorreo] = useState('')
  const [ficha, setFicha] = useState('')
  const [jornada, setJornada] = useState('Mañana')
  const [tipoDocumento, setTipoDocumento] = useState('')
  const [documento, setDocumento] = useState('')
  const [telefono, setTelefono] = useState('')
  const [fechaNacimiento, setFechaNacimiento] = useState('')
  const [genero, setGenero] = useState('')
  const [registroExitoso, setRegistroExitoso] = useState(false)

  const continuar = (event) => {
    event.preventDefault()
    setRegistroExitoso(true)
  }

  return (
    <section className="formulario" aria-labelledby="titulo-formulario">
      <h2 id="titulo-formulario">Registro de Aprendices</h2>

      <form onSubmit={continuar}>
        <div className="grupo grupo-completo">
          <label htmlFor="foto">Fotografía</label>
          <input
            id="foto"
            type="file"
            accept="image/*"
            onChange={(event) => setFoto(event.target.files[0] ?? null)}
          />
          {foto && <small>Archivo seleccionado: {foto.name}</small>}
        </div>

        <div className="grupo">
          <label htmlFor="nombre">Nombre completo</label>
          <input id="nombre" type="text" placeholder="Ingrese su nombre" value={nombre} onChange={(event) => setNombre(event.target.value)} required />
        </div>

        <div className="grupo">
          <label htmlFor="edad">Edad</label>
          <input id="edad" type="number" min="1" placeholder="Ingrese su edad" value={edad} onChange={(event) => setEdad(event.target.value)} required />
        </div>

        <div className="grupo">
          <label htmlFor="ciudad">Ciudad</label>
          <input id="ciudad" type="text" placeholder="Ingrese su ciudad" value={ciudad} onChange={(event) => setCiudad(event.target.value)} required />
        </div>

        <div className="grupo">
          <label htmlFor="programa">Programa de formación</label>
          <input id="programa" type="text" placeholder="Ejemplo: ADSO" value={programa} onChange={(event) => setPrograma(event.target.value)} required />
        </div>

        <div className="grupo">
          <label htmlFor="correo">Correo electrónico</label>
          <input id="correo" type="email" placeholder="correo@misena.edu.co" value={correo} onChange={(event) => setCorreo(event.target.value)} required />
        </div>

        <div className="grupo">
          <label htmlFor="ficha">Número de ficha</label>
          <input id="ficha" type="number" min="1" placeholder="Ingrese la ficha" value={ficha} onChange={(event) => setFicha(event.target.value)} required />
        </div>

        <div className="grupo">
          <label htmlFor="jornada">Jornada</label>
          <select id="jornada" value={jornada} onChange={(event) => setJornada(event.target.value)}>
            <option>Mañana</option>
            <option>Tarde</option>
            <option>Noche</option>
            <option>Mixta</option>
          </select>
        </div>

        <div className="grupo">
          <label htmlFor="tipo-documento">Tipo de documento</label>
          <select id="tipo-documento" value={tipoDocumento} onChange={(event) => setTipoDocumento(event.target.value)} required>
            <option value="" disabled>Seleccione una opción</option>
            <option value="CC">Cédula de ciudadanía</option>
            <option value="TI">Tarjeta de identidad</option>
            <option value="CE">Cédula de extranjería</option>
            <option value="Pasaporte">Pasaporte</option>
          </select>
        </div>

        <div className="grupo">
          <label htmlFor="documento">Documento de identidad</label>
          <input id="documento" type="text" inputMode="numeric" placeholder="Ingrese su documento" value={documento} onChange={(event) => setDocumento(event.target.value)} required />
        </div>

        <div className="grupo">
          <label htmlFor="telefono">Teléfono</label>
          <input id="telefono" type="tel" placeholder="Ingrese su teléfono" value={telefono} onChange={(event) => setTelefono(event.target.value)} required />
        </div>

        <div className="grupo">
          <label htmlFor="fecha-nacimiento">Fecha de nacimiento</label>
          <input id="fecha-nacimiento" type="date" value={fechaNacimiento} onChange={(event) => setFechaNacimiento(event.target.value)} required />
        </div>

        <fieldset className="grupo grupo-completo">
          <legend>Género</legend>
          <div className="opciones-radio">
            <label><input type="radio" name="genero" value="Femenino" checked={genero === 'Femenino'} onChange={(event) => setGenero(event.target.value)} required /> Femenino</label>
            <label><input type="radio" name="genero" value="Masculino" checked={genero === 'Masculino'} onChange={(event) => setGenero(event.target.value)} /> Masculino</label>
            <label><input type="radio" name="genero" value="Otro" checked={genero === 'Otro'} onChange={(event) => setGenero(event.target.value)} /> Otro</label>
          </div>
        </fieldset>

        <button type="submit">Continuar registro</button>
      </form>

      {registroExitoso && <p className="mensaje-exito" role="status">Los datos fueron capturados correctamente.</p>}
    </section>
  )
}

export default FormularioDatos
