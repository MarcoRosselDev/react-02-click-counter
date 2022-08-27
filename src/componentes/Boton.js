import React from 'react';

function Boton({texto, esBotonDeClick, manejarClick}) {
  return (
    <button
      className={ esBotonDeClick ? 'boton-click' : 'boton-reiniciar' }
      onClick={manejarClick} >
      {texto} 
    </button>
  ) // sintaxis de desestructuración
}

export default Boton;