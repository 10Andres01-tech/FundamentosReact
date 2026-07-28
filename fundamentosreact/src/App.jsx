import './App.css'
import { useState } from 'react'
import picture from './assets/rt.png'
import Header from "./components/header"
import Dbasicos from './components/perfil'
import Cursos from './components/cursos'
import Footer from "./components/footer";


function App() {

  const [programa,setPrograma] = useState("Sistemas")
  const [datos, setdatos] = useState(true);

  return (

      <div className='contenedor'>

        <Header
        programa = {programa}/>
        <button onClick={()=>setPrograma("Ingenieria de sistemas")}>
          Cambiar Programa
        </button>
        <Dbasicos
        nombre ="Andres "/>
        <Cursos
        datos = {datos}/>
        <button onClick={() => setdatos(!datos)}>
          {datos ? "Ocultar detalles" : "Mostrar detalles"}
        </button>
        <Footer/>
      </div>


      
  );
}

export default App