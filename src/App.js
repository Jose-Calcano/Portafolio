import Navbar from "./Componentes/Navbar/Navbar";
import './App.css'
import Intro from "./Componentes/Intro/Intro";
import Servicios from "./Componentes/Servicios/Servicios";
import Experience from "./Componentes/Experience/experience"
import Works from './Componentes/Works/works'
import Portfolio from "./Componentes/Portfolio/portfolio";
import Testimonials from './Componentes/Testimonials/Testimonials'
import Test from './Componentes/Test/test'
import ChatPage from './Componentes/ChatPage/ChatPage'

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Intro/>
    <Servicios/>
    <Experience/>
    <Works/>
    <Portfolio/>
    <Testimonials/>
    <ChatPage/>

    </div>
  );
}

export default App;
