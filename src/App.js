import Navbar from "./Componentes/Navbar/Navbar";
import './App.css'
import Intro from "./Componentes/Intro/Intro";
import Servicios from "./Componentes/Servicios/Servicios";
import Experience from "./Componentes/Experience/experience"
import Works from './Componentes/Works/works'
import Portfolio from "./Componentes/Portfolio/portfolio";

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Intro/>
    <Servicios/>
    <Experience/>
    <Works/>
    <Portfolio/>
    </div>
  );
}

export default App;
