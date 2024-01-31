import React, { useEffect, useState } from "react";

export default function Jugador({ tipo }) {
  const [objeto, setObjeto] = useState(0); //generamos el estado del componente jugador

  function cambiarEstado(estado) {
    useEffect(() => {
      setObjeto(estado);
    }, []);
  }
  let resultado;
  let nombrefuncion=(value) => setObjeto("piedra")

  
  function sumar(n){
    console.log(5+n)

  }


  if (tipo === "ia") {
    // Si es de tipo IA entonces la maquina generara automaticamente el resultado
    resultado = (<p>pacso</p>);
  } else {
    //   Si es de tipo jugador entonces el usuario determina mediante botones s
    resultado = (
        
      <div className="Jugador">
        <input type="submit" name="opcion" onClick={sumar(3)} value="piedra"/>
          
        
        <input type="submit" name="opcion" onClick={(value )=> setObjeto("papel")} value="papel"/>
          
        
        <input type="submit" name="opcion" onClick={(value) =>setObjeto("tijera")} value="tijera"/>
          
        
      </div>
    );
  }

  return resultado;
}
