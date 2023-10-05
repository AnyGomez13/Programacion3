import {useState} from "react";


export const ContadorApp = ({value}) => {
  const [contador, setContador] = useState(0);
  const Incrementar = () => setContador (c => c  + 1);

  return <>
  <h2> El valor del contador es {contador}</h2>
  <button onClick= {Incrementar}> incrementar contador + 1</button>
  </>
}