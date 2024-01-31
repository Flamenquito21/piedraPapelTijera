import React, { useEffect, useState } from "react";

export default function Padre() {
    const [estadoHijo, setEstadoHijo] = useState(null);
    
    console.log(estadoHijo)

    return (
    <>
        <button onClick={()=>{}}></button>
        <Hijo onCambio={setEstadoHijo} />);
    </>
    )
  }
  
export function Hijo({ onCambio }) {
    const [estado, setEstado] = useState('algún estado');
  
    useEffect(() => {
      onCambio(estado);
    }, [estado, onCambio]);
  
    return (
      <p>hijito</p>
    );
}