import './App.css'
import picture from './assets/rt.png'
import Header from "./components/header"
import Dbasicos from './components/perfil'
import Cursos from './components/cursos'
import Footer from "./components/footer";
function App() {
  return (

      <div className='contenedor'>

        <Header/>
        <Dbasicos/>
        <Cursos/>
        <Footer/>
      </div>


      
  );
}

export default App