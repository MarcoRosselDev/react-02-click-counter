import './App.css';
import Boton from './componentes/Boton';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';

function App() {

  const manejarClick = () => {
    console.log('click');
  }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
        className='freecodecamp-logo' 
        src={freeCodeCampLogo} 
        alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-principal'>
        <Boton 
          texto='click'
          esBotonDeclick={true}
          manejarClick={}
        />
        <Boton 
          texto='Reiniciar'
          esBotonDeclick={false}
          manejarClick={}
        />
      </div>
    </div>
  );
}

export default App;