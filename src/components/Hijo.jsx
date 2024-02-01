import React, { useEffect, useState } from "react";

export default function Hijo({nombre,gritoDeGuerra }) {//props coinciden con las varibles
  const [objeto, setObjeto] = useState("valor por defecto"); //generamos el estado del componente jugador

  useEffect(() => {
    console.log(
      "renceriza(cuando componenete se coloca en dom) o me actualiza"
    );
  });

  useEffect(() => {
    console.log(
      " renderiza(cuando componenete se coloca en dom)"
    );
  }, []);

  useEffect(() => {
    console.log("cuando la dependencia -> objeto cambia o se declara)");
  }, [objeto]);

  function gritar() {
    console.log(gritoDeGuerra);
  }
  return (
    <>
      <button type="submit" name="opcion" onClick={() => setObjeto("papel")}>
        papel
      </button>
      <button type="submit" name="opcion" onClick={() => setObjeto("tijera")}>
        tijera
      </button>
      <button type="submit" name="opcion" onClick={gritar}>
        grito
      </button>
      <p>{nombre}</p>
    </>
  );
}
