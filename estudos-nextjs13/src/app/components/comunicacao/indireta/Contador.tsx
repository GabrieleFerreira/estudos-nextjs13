import { useState } from "react";
import Botao from "./Botoes";
import Display from "./Display";

export default function Contador() {
  const [num, setNum] = useState<number>(0);
  function incrementar(valor: number) {
    setNum(num + valor);
  }
  function decrementar(valor: number) {
    setNum(num - valor);
  }
  return (
    <div className="  w-72 h-72 flex flex-col border border-zinc-400 rounded-lg  ">
      <Display valor={num} />
      <Botao inc={incrementar} dec={decrementar} />
    </div>
  );
}
