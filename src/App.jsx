import './App.css'
import Header from './components/header'
import FormularioDatos from './components/FormularioDatos'
import Footer from './components/footer'

function App() {
  return (
    <div className="contenedor">
      <Header />
      <main>
        <FormularioDatos />
      </main>
      <Footer />
    </div>
  )
}

export default App
