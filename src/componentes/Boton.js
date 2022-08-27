import React from 'react';

function Boton({texto, esBotonDeClick}) {
  return (
    <button
      className={ esBotonDeClick ? 'boton-click' : 'boton-reiniciar' }>
      {texto} 
    </button>
  ) // sintaxis de desestructuración
}