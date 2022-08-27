import React from 'react';

function Boton({texto, esBotonDeClick, manejarClick}) {
  return (
    <button
      className={ esBotonDeClick ? 'boton-click' : 'boton-reiniciar' }
      onClick={manejarClick}>
    </button>
  ) // sintaxis de desestructuración
}

export default Boton;